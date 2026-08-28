"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  if (!form.email.trim()) errors.email = "Enter your email.";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (!form.message.trim()) errors.message = "Enter a message.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setStatus("idle");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = form.subject.trim() || `Portfolio contact from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <section id="contact" className="band">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(28px,5vw,64px)]">
        <div>
          <p className="eyebrow">07 — Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="mt-5 max-w-[40ch] text-[17px] leading-[1.6] text-muted-2">
            Hiring, collaborating, or a question about the work — send a note.
          </p>
          <div className="mt-[30px] grid gap-2.5 text-[15.5px]">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              {profile.linkedinLabel}
            </a>
            <a href={profile.resumeUrl} download>
              Download résumé
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="grid gap-3">
          <div>
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn("field w-full", errors.name && "border-red-400/60")}
            />
            {errors.name ? (
              <p id="name-error" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn("field w-full", errors.email && "border-red-400/60")}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            ) : null}
          </div>

          <input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="field w-full"
          />

          <div>
            <textarea
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn("field w-full resize-y", errors.message && "border-red-400/60")}
            />
            {errors.message ? (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-1 w-fit justify-self-start rounded-full bg-accent px-[22px] py-[15px] text-[15px] font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            {status === "sent" ? "Opening your email client ✓" : "Send message"}
          </button>
        </form>
      </Container>
    </section>
  );
}
