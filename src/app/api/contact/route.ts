import { Resend } from "resend";
import { profile } from "@/data/profile";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json({ error: "Email sending isn't configured yet." }, { status: 500 });
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: profile.email,
    replyTo: email,
    subject: subject || `Portfolio contact from ${name}`,
    text: `${message}\n\n— ${name} (${email})`,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
