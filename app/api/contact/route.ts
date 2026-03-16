import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
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
      subject: `Contact Form: ${subject}`,
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
                <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 500;">${name}</p>
              </div>
              
              <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                <p style="margin: 0;"><a href="mailto:${email}" style="color: #3498db; text-decoration: none; font-size: 16px;">${email}</a></p>
              </div>
              
              <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0; color: #7f8c8d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 500;">${subject}</p>
              </div>
              
              <div style="margin-bottom: 0;">
                <p style="margin: 0 0 12px 0; color: #7f8c8d; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                <p style="margin: 0; color: #2c3e50; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
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

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

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
    return NextResponse.json(
      {
        message: "Failed to send email. Please try again later.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
