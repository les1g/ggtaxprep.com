"use client";

import { FormEvent, useEffect, useState } from "react";

type AppointmentType = "in_person" | "phone";
type AvailableSlot = { time: string; label: string };

function getPhoenixDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export default function BookingScheduler() {
  const [appointmentType, setAppointmentType] = useState<AppointmentType | "">(
    "",
  );
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<AvailableSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setDate(getPhoenixDate());
  }, []);

  useEffect(() => {
    if (!appointmentType || !date) {
      setSlots([]);
      setSelectedTime("");
      return;
    }

    const controller = new AbortController();
    setLoadingSlots(true);
    setSelectedTime("");
    setError("");
    setConfirmation("");

    fetch(
      `/api/appointments?date=${encodeURIComponent(date)}&type=${appointmentType}`,
      { signal: controller.signal },
    )
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || "Unable to load appointment times.");
        }
        setSlots(result.slots);
      })
      .catch((fetchError: unknown) => {
        if (fetchError instanceof Error && fetchError.name !== "AbortError") {
          setError(fetchError.message);
          setSlots([]);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingSlots(false);
      });

    return () => controller.abort();
  }, [appointmentType, date]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setConfirmation("");

    if (!appointmentType || !selectedTime) {
      setError("Please choose an appointment type and an available time.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          type: appointmentType,
          date,
          time: selectedTime,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to book your appointment.");
      }

      setConfirmation(
        result.emailSent
          ? "Your appointment is booked. A confirmation email has been sent."
          : "Your appointment is booked, but we could not send the email notification. Please contact us at info@ggtaxprep.com to confirm.",
      );
      setName("");
      setEmail("");
      setPhone("");
      setSelectedTime("");
      setSlots((available) =>
        available.filter((slot) => slot.time !== selectedTime),
      );
    } catch (submitError: unknown) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to book your appointment. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-xl border border-gray-700 bg-gray-800 p-6 text-left shadow-lg sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-200">
          Appointment type
          <select
            required
            value={appointmentType}
            onChange={(event) =>
              setAppointmentType(event.target.value as AppointmentType | "")
            }
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-3 text-white"
          >
            <option value="" disabled>
              Select an appointment type
            </option>
            <option value="phone">Phone appointment (30 minutes)</option>
            <option value="in_person">In-person appointment (30 minutes)</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-gray-200">
          Date
          <input
            required
            type="date"
            min={date || undefined}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-3 text-white"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-gray-200">
          Available times (Arizona time)
        </legend>
        {!appointmentType || !date ? (
          <p className="mt-3 text-sm text-gray-400">
            Choose an appointment type and date to see available times.
          </p>
        ) : loadingSlots ? (
          <p className="mt-3 text-sm text-gray-400">Checking availability…</p>
        ) : slots.length === 0 ? (
          <p className="mt-3 text-sm text-gray-400">
            No times are available on this date. Please choose another date.
          </p>
        ) : (
          <div className="mt-3 flex flex-wrap gap-3">
            {slots.map((slot) => (
              <button
                key={slot.time}
                type="button"
                aria-pressed={selectedTime === slot.time}
                onClick={() => setSelectedTime(slot.time)}
                className={`rounded-lg border px-4 py-2 font-medium transition-colors ${
                  selectedTime === slot.time
                    ? "border-green-500 bg-green-600 text-white"
                    : "border-gray-600 bg-gray-900 text-gray-200 hover:border-green-500"
                }`}
              >
                {slot.label}
              </button>
            ))}
          </div>
        )}
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-200">
          Your name
          <input
            required
            maxLength={120}
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-3 text-white"
          />
        </label>
        <label className="block text-sm font-medium text-gray-200">
          Phone number
          <input
            required
            type="tel"
            maxLength={30}
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-3 text-white"
          />
        </label>
        <label className="block text-sm font-medium text-gray-200 sm:col-span-2">
          Email address
          <input
            required
            type="email"
            maxLength={254}
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-3 text-white"
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-5 rounded-lg bg-red-950 p-3 text-red-200">
          {error}
        </p>
      )}
      {confirmation && (
        <p
          role="status"
          className="mt-5 rounded-lg bg-green-950 p-3 text-green-200"
        >
          {confirmation}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting || loadingSlots || !selectedTime}
        className="mt-6 w-full rounded-lg bg-green-600 px-5 py-3 font-bold text-white transition-colors hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? "Booking…" : "Book Appointment"}
      </button>
    </form>
  );
}
