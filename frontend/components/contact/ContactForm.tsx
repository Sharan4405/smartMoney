"use client";

import { FormEvent, useState } from "react";

const inputClasses =
  "rounded-sm border border-border px-5 py-3 text-[14px] outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMessage(data?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-2 rounded-lg border border-border bg-bg-alt p-8">
        <h3 className="text-[18px] font-bold text-primary">Thank you!</h3>
        <p className="text-[14px] text-muted">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[14px] font-medium text-primary">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[14px] font-medium text-primary">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[14px] font-medium text-primary">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[14px] font-medium text-primary">
          Message
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} />
      </div>

      {status === "error" && (
        <p className="text-[14px] font-medium text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3.25 text-[14px] font-semibold text-primary transition-colors hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
