import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import {
  SendSmtpEmail,
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";

export const dynamic = "force-dynamic";

const TIME_ZONE = "America/Phoenix";
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const emailAPI = new TransactionalEmailsApi();

if (BREVO_API_KEY) {
  emailAPI.setApiKey(TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY);
}

type AppointmentType = "in_person" | "phone";

function getSupabase() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

function isAppointmentType(value: unknown): value is AppointmentType {
  return value === "in_person" || value === "phone";
}

function phoenixToday() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function isValidDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T12:00:00-07:00`);
  return (
    !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date
  );
}

function isAllowedSlot(date: string, time: string, type: AppointmentType) {
  if (!isValidDate(date)) return false;
  const localDate = new Date(`${date}T12:00:00-07:00`);
  const day = localDate.getUTCDay();
  if (day === 0) return false;

  if (type === "in_person" && day !== 6) return time === "12:00";

  const match = /^(0[8-9]|1[0-7]):(00|30)$/.exec(time);
  return Boolean(match);
}

function slotDateTime(date: string, time: string) {
  return new Date(`${date}T${time}:00-07:00`);
}

function dateBounds(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  const nextDate = new Date(Date.UTC(year, month - 1, day + 1))
    .toISOString()
    .slice(0, 10);
  return {
    start: new Date(`${date}T00:00:00-07:00`).toISOString(),
    end: new Date(`${nextDate}T00:00:00-07:00`).toISOString(),
  };
}

function getSlotTimes(type: AppointmentType, date: string) {
  const day = new Date(`${date}T12:00:00-07:00`).getUTCDay();
  if (type === "in_person" && day !== 6) return ["12:00"];
  const times: string[] = [];
  for (let hour = 8; hour < 18; hour += 1) {
    for (const minute of ["00", "30"]) {
      times.push(`${String(hour).padStart(2, "0")}:${minute}`);
    }
  }
  return times;
}

function formatSlot(date: string, time: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(slotDateTime(date, time));
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function emailIsConfigured() {
  return Boolean(
    BREVO_API_KEY && BREVO_SENDER_EMAIL && BREVO_SENDER_NAME && ADMIN_EMAIL,
  );
}

function isSupabaseConnectionError(error: unknown) {
  const message =
    error instanceof Error
      ? error.message
      : error &&
          typeof error === "object" &&
          "message" in error &&
          typeof error.message === "string"
        ? error.message
        : "";
  return message.toLowerCase().includes("fetch failed");
}

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date") ?? "";
  const type = request.nextUrl.searchParams.get("type");
  if (!isAppointmentType(type) || !isValidDate(date)) {
    return NextResponse.json(
      { error: "Choose a valid appointment type and date." },
      { status: 400 },
    );
  }

  const today = phoenixToday();
  if (date < today) {
    return NextResponse.json(
      { error: "Please choose today or a future date." },
      { status: 400 },
    );
  }

  const supabase = getSupabase();
  if (!supabase) {
    console.error("Appointment booking requires Supabase configuration.");
    return NextResponse.json(
      { error: "Online booking is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const bounds = dateBounds(date);
    const { data: bookings, error } = await supabase
      .from("appointments")
      .select("starts_at")
      .gte("starts_at", bounds.start)
      .lt("starts_at", bounds.end);

    if (error) {
      console.error(
        `Failed to query appointment availability: ${error.code} ${error.message} ${error.details} ${error.hint}`,
      );
      if (error.code === "42P01" || error.code === "PGRST205") {
        return NextResponse.json(
          {
            error:
              "Appointment booking has not been set up yet. Please contact us directly to schedule.",
          },
          { status: 503 },
        );
      }
      throw error;
    }

    const bookedTimes = new Set(
      (bookings ?? []).map((booking) =>
        new Date(booking.starts_at).toISOString(),
      ),
    );
    const slots = getSlotTimes(type, date)
      .filter((time) => {
        const startsAt = slotDateTime(date, time);
        return (
          startsAt.getTime() > Date.now() &&
          !bookedTimes.has(startsAt.toISOString())
        );
      })
      .map((time) => ({
        time,
        label: new Intl.DateTimeFormat("en-US", {
          timeZone: TIME_ZONE,
          hour: "numeric",
          minute: "2-digit",
        }).format(slotDateTime(date, time)),
      }));

    return NextResponse.json({ slots });
  } catch (error) {
    console.error(
      `Failed to load appointment availability: ${error instanceof Error ? error.message : String(error)}`,
    );
    if (isSupabaseConnectionError(error)) {
      return NextResponse.json(
        {
          error:
            "We can't connect to online booking right now. Please try again later or contact info@ggtaxprep.com to schedule.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { error: "Unable to load appointment times. Please try again." },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  if (!supabase) {
    console.error("Appointment booking requires Supabase configuration.");
    return NextResponse.json(
      { error: "Online booking is temporarily unavailable." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid booking request." },
      { status: 400 },
    );
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { error: "Invalid booking request." },
      { status: 400 },
    );
  }

  const booking = body as Record<string, unknown>;
  const name = typeof booking.name === "string" ? booking.name.trim() : "";
  const email = typeof booking.email === "string" ? booking.email.trim() : "";
  const phone = typeof booking.phone === "string" ? booking.phone.trim() : "";
  const date = typeof booking.date === "string" ? booking.date : "";
  const time = typeof booking.time === "string" ? booking.time : "";
  const type = booking.type;

  if (
    !isAppointmentType(type) ||
    !isValidDate(date) ||
    !isAllowedSlot(date, time, type) ||
    name.length < 2 ||
    name.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    phone.length < 7 ||
    phone.length > 30
  ) {
    return NextResponse.json(
      { error: "Please enter valid contact details and choose an available time." },
      { status: 400 },
    );
  }

  const startsAt = slotDateTime(date, time);
  const today = phoenixToday();
  if (date < today || startsAt.getTime() <= Date.now()) {
    return NextResponse.json(
      { error: "That appointment time has passed. Please choose another time." },
      { status: 400 },
    );
  }

  try {
    const { error } = await supabase.from("appointments").insert({
      name,
      email,
      phone,
      appointment_type: type,
      starts_at: startsAt.toISOString(),
    });

    if (error?.code === "23505") {
      return NextResponse.json(
        {
          error:
            "That time was just booked by someone else. Please choose another available time.",
        },
        { status: 409 },
      );
    }
    if (error) throw error;
  } catch (error) {
    console.error("Failed to save appointment:", error);
    if (isSupabaseConnectionError(error)) {
      return NextResponse.json(
        {
          error:
            "We can't connect to online booking right now. Please try again later or contact info@ggtaxprep.com to schedule.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { error: "Unable to save your appointment. Please try again." },
      { status: 500 },
    );
  }

  if (!emailIsConfigured()) {
    console.error(
      "Appointment was saved, but Brevo email environment variables are missing.",
    );
    return NextResponse.json({ success: true, emailSent: false }, { status: 201 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const appointmentLabel =
    type === "in_person" ? "In-person appointment" : "Phone appointment";
  const formattedDate = escapeHtml(formatSlot(date, time));
  const appointmentLocation =
    type === "in_person"
      ? "<p><strong>Location:</strong> 4015 N 15th Ave, Phoenix, AZ 85018</p>"
      : `<p><strong>We will call you at:</strong> ${safePhone}</p>`;

  const adminEmail = new SendSmtpEmail();
  adminEmail.to = [{ email: ADMIN_EMAIL! }];
  adminEmail.sender = { email: BREVO_SENDER_EMAIL!, name: BREVO_SENDER_NAME! };
  adminEmail.subject = "New GG Tax Services appointment";
  adminEmail.htmlContent = `
    <h2>New appointment booking</h2>
    <p><strong>Client:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhone}</p>
    <p><strong>Appointment:</strong> ${appointmentLabel}</p>
    <p><strong>Time:</strong> ${formattedDate}</p>
    ${appointmentLocation}
  `;

  const clientEmail = new SendSmtpEmail();
  clientEmail.to = [{ email }];
  clientEmail.sender = { email: BREVO_SENDER_EMAIL!, name: BREVO_SENDER_NAME! };
  clientEmail.subject = "Appointment booked - GG Tax Services";
  clientEmail.htmlContent = `
    <h2>Your appointment is booked</h2>
    <p>Hi ${safeName}, your ${appointmentLabel.toLowerCase()} is scheduled for ${formattedDate}.</p>
    ${appointmentLocation}
    <p>If you need to make a change, please contact us at info@ggtaxprep.com.</p>
  `;

  const emailResults = await Promise.allSettled([
    emailAPI.sendTransacEmail(adminEmail),
    emailAPI.sendTransacEmail(clientEmail),
  ]);
  const emailSent = emailResults.every((result) => result.status === "fulfilled");
  if (!emailSent) {
    emailResults.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(
          index === 0
            ? "Failed to email the appointment notification."
            : "Failed to email the appointment confirmation.",
          result.reason,
        );
      }
    });
  }

  return NextResponse.json({ success: true, emailSent }, { status: 201 });
}
