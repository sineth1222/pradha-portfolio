import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, company, message, projectType, budget, timeline, slot } =
    body;

  try {
    // ── 1. ඔයාට එන notification email ──
    await transporter.sendMail({
      from: `"PraDha Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ORDER_TO_EMAIL,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto">
          <h2 style="font-family:Georgia,serif;border-bottom:2px solid #D4A017;padding-bottom:8px">
            New Project Enquiry
          </h2>
          <table style="border-collapse:collapse;width:100%;font-size:14px">
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Name</td><td style="padding:10px;border:1px solid #eee">${name}</td></tr>
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Email</td><td style="padding:10px;border:1px solid #eee">${email}</td></tr>
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Company</td><td style="padding:10px;border:1px solid #eee">${company || "—"}</td></tr>
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Project Type</td><td style="padding:10px;border:1px solid #eee">${projectType}</td></tr>
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Budget</td><td style="padding:10px;border:1px solid #eee">${budget}</td></tr>
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Timeline</td><td style="padding:10px;border:1px solid #eee">${timeline}</td></tr>
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Preferred Slot</td><td style="padding:10px;border:1px solid #eee">${slot || "Not selected"}</td></tr>
            <tr><td style="padding:10px;border:1px solid #eee;font-weight:bold;background:#fafafa">Message</td><td style="padding:10px;border:1px solid #eee">${message}</td></tr>
          </table>
        </div>
      `,
    });

    // ── 2. User ට thank-you email ──
    await transporter.sendMail({
      from: `"PraDha Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your enquiry — PraDha Solutions",
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;color:#111">
          <h2 style="font-family:Georgia,serif;color:#D4A017">Hi ${name},</h2>
          <p>Thank you for reaching out to <strong>PraDha Solutions</strong>!</p>
          <p>We've received your project enquiry and will get back to you within <strong>24 hours</strong>.</p>
          <p style="color:#888;font-size:13px">
            For the fastest response, WhatsApp us at 
            <a href="https://wa.me/94705089955" style="color:#25D366">+94 705 089 955</a>.
          </p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
          <p style="font-size:12px;color:#aaa">PraDha Solutions · Sri Lanka</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
