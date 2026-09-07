"use client";

import { profile } from "@/data/profile";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setError("Please complete every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }

    setStatus("loading");
    setError("");

    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    try {
      window.location.href = href;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Could not open your mail client. Email me directly instead.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-4" noValidate>
      <label className="grid gap-2 text-sm">
        <span className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">Name</span>
        <input
          name="name"
          autoComplete="name"
          required
          className="border border-line bg-transparent px-3 py-3 outline-none focus:border-fg"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="border border-line bg-transparent px-3 py-3 outline-none focus:border-fg"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">Subject</span>
        <input
          name="subject"
          required
          className="border border-line bg-transparent px-3 py-3 outline-none focus:border-fg"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y border border-line bg-transparent px-3 py-3 outline-none focus:border-fg"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-fit border border-fg bg-fg px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-bg uppercase disabled:opacity-50"
      >
        {status === "loading" ? "Opening…" : "Send message"}
      </button>
      {status === "success" ? (
        <p role="status" className="text-sm text-muted">
          Your mail client should open with the message. If it does not, write to {profile.email}.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm text-muted">
          {error}
        </p>
      ) : null}
    </form>
  );
}
