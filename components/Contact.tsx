// components/Contact.tsx
"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:mokoenajabulani730@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6b7280]">
        Contact
      </p>

      <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
        Let&apos;s build something.
      </h2>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-[#374151]">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#C1592D]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-[#374151]">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#C1592D]"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="message" className="text-sm font-medium text-[#374151]">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#C1592D]"
            placeholder="What are you working on?"
          />
        </div>

        <button
          type="submit"
          className="mt-8 rounded-full border border-[#C1592D] bg-[#C1592D] px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#a04a25]"
        >
          Send message
        </button>
      </form>

      
    </section>
  );
}