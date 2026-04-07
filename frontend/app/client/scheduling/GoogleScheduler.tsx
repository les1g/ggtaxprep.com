"use client";
import { useEffect, useRef } from "react";

export default function GoogleScheduler() {
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    // Load Google Calendar CSS
    const link = document.createElement("link");
    link.href =
      "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Google Calendar Script
    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;

    script.onload = () => {
      const windowWithCalendar = window as Window & {
        calendar?: { schedulingButton: { load: (config: object) => void } };
      };
      if (windowWithCalendar.calendar && buttonContainerRef.current) {
        windowWithCalendar.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/AcZssZ2_9LYg_A6J15PpK10MDHb0pdyyG4o7bLQRpzk=?gv=true",
          color: "#16A34A",
          label: "Book an appointment",
          target: buttonContainerRef.current,
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return <div ref={buttonContainerRef}></div>;
}
