import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TEAM_EMAIL = "erumarnazir@gmail.com";

type TContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function getContactFormHtmlForTeam(data: TContactFormData) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Contact Number:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;
}

export async function POST(req: Request) {
  try {
    const data: TContactFormData = await req.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Sanitize input to prevent XSS
    const sanitizedData = {
      name: data.name.trim().substring(0, 200),
      phone: data.phone.trim().substring(0, 30),
      email: data.email.trim().substring(0, 200),
      message: data.message.trim().substring(0, 5000),
    };

    // Configure SMTP settings
    // Default to Gmail SMTP if not specified in env
    const smtpConfig = {
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true" || true, // true for 465 (faster, direct TLS)
      auth: {
        user: process.env.SMTP_USER || process.env.GMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD,
      },
      // Fail fast instead of hanging if Gmail is slow/unreachable
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
    };

    const isDev = process.env.NODE_ENV === "development";

    // When SMTP is not configured: in dev, accept the form and log; in prod, return error
    if (!smtpConfig.auth.user || !smtpConfig.auth.pass) {
      if (isDev) {
        console.log("[Contact form – dev] Submission received (email not configured):", sanitizedData);
        return NextResponse.json(
          { success: true, message: "Message sent successfully!" },
          { status: 200 }
        );
      }
      console.error("SMTP credentials are not configured");
      return NextResponse.json(
        { success: false, message: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Send email (skip the separate verify() step — it adds a full extra
    // round-trip to Gmail; sendMail already authenticates on connect)
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${smtpConfig.auth.user}>`,
      to: TEAM_EMAIL,
      subject: "Contact Form Submission - Portfolio",
      html: getContactFormHtmlForTeam(sanitizedData),
      replyTo: sanitizedData.email,
    });

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    const isDev = process.env.NODE_ENV === "development";
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: isDev
          ? `Failed to send message: ${errorMessage}`
          : "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

