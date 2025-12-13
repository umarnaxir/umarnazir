import { NextResponse } from "next/server";
import { Resend } from "resend";

const TEAM_EMAIL = "umar@saibbyweb.com";
const FROM_EMAIL = "No Reply <no-reply@ninemash.com>";

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
    // Check if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { success: false, message: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
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

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TEAM_EMAIL],
      subject: "Contact Form Submission - Portfolio",
      html: getContactFormHtmlForTeam(sanitizedData),
      replyTo: sanitizedData.email,
    });

    // Check if Resend returned an error
    if (result.error) {
      console.error("Resend API error:", result.error);
      return NextResponse.json(
        { success: false, message: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

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

