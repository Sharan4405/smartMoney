"use client";

import { FormEvent, useState } from "react";

const inputClasses =
  "rounded-sm border border-border px-5 py-3.5 text-base outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-3 rounded-lg border border-border bg-bg-alt p-8">
        <h3 className="text-xl font-semibold text-primary">Thank you!</h3>
        <p className="text-base text-muted">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-base font-medium text-primary">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-base font-medium text-primary">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base font-medium text-primary">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-base font-medium text-primary">
          Message
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-accent-light"
      >
        Send Message
      </button>
    </form>
  );
}
