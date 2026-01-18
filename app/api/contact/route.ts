import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TEAM_EMAIL = "sd.umarnazir@gmail.com";

type TContactFormData = {
  name: string;
  email: string;
  message: string;
};

function getContactFormHtmlForTeam(data: TContactFormData) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;
}

export async function POST(req: Request) {
  try {
    const data: TContactFormData = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
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
      email: data.email.trim().substring(0, 200),
      message: data.message.trim().substring(0, 5000),
    };

    // Configure SMTP settings
    // Default to Gmail SMTP if not specified in env
    const smtpConfig = {
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true" || false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.GMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD,
      },
    };

    // Check if SMTP credentials are configured
    if (!smtpConfig.auth.user || !smtpConfig.auth.pass) {
      console.error("SMTP credentials are not configured");
      return NextResponse.json(
        { success: false, message: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify connection configuration
    await transporter.verify();

    // Send email
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
    // Log the full error for debugging (server-side only)
    console.error("Contact form error:", error);
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

