import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot?: string // Bot detection field
}

// Simple in-memory rate limiting (use Redis/Upstash in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 3) {
    // Max 3 requests per minute
    return false
  }

  limit.count++
  return true
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 2000) // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body: ContactFormData = await request.json()
    const { name, email, subject, message, honeypot } = body

    // Honeypot check (bot detection)
    if (honeypot) {
      console.log("Bot detected via honeypot")
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
    }

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    // Length validation
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return NextResponse.json(
        { message: "Input exceeds maximum length" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedSubject = sanitizeInput(subject)
    const sanitizedMessage = sanitizeInput(message)

    // Verify environment variables are set
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD
    ) {
      console.error("SMTP configuration missing")
      return NextResponse.json(
        { message: "Email service not configured" },
        { status: 500 }
      )
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "info@sokogin.com",
      replyTo: email,
      subject: `Contact Form: ${sanitizedSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
              <h2 style="color: #2c3e50; margin-top: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h2>
              <p style="color: #7f8c8d; margin-bottom: 0;">You have received a new message from your website contact form.</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e9ecef; border-radius: 10px;">
              <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 500;">${sanitizedName}</p>
              </div>
              
              <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                <p style="margin: 0;"><a href="mailto:${email}" style="color: #3498db; text-decoration: none; font-size: 16px;">${email}</a></p>
              </div>
              
              <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 500;">${sanitizedSubject}</p>
              </div>
              
              <div style="margin-bottom: 0;">
                <p style="margin: 0 0 12px 0; color: #7f8c8d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                <p style="margin: 0; color: #2c3e50; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${sanitizedMessage}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
              <p style="margin: 0; color: #7f8c8d; font-size: 13px; text-align: center;">
                This email was sent from the Soko Gin website contact form.<br>
                <span style="color: #95a5a6; font-size: 12px;">Received on ${new Date().toLocaleString()}</span>
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${email}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
This email was sent from the Soko Gin website contact form.
Received on ${new Date().toLocaleString()}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    // Don't leak error details to client
    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
