# Security Guide for Contact Form

## ✅ Implemented Security Measures

### 1. **Environment Variables**
- ✅ SMTP credentials stored in environment variables (not in code)
- ✅ `.env.local` excluded from git via `.gitignore`
- ✅ Production credentials configured in Vercel dashboard

### 2. **Server-Side Processing**
- ✅ Email sending handled in API route (`/api/contact/route.ts`)
- ✅ Credentials never exposed to client-side code
- ✅ All validation happens on the server

### 3. **Input Validation & Sanitization**
- ✅ Required field validation
- ✅ Email format validation (regex)
- ✅ Length limits (name: 100, subject: 200, message: 2000 chars)
- ✅ HTML tag removal to prevent XSS attacks
- ✅ Input trimming and sanitization

### 4. **Rate Limiting**
- ✅ **3 requests per minute** per IP address
- ✅ Prevents spam and abuse
- ✅ Returns 429 status when limit exceeded

### 5. **Bot Protection**
- ✅ **Honeypot field** - hidden field that bots fill but humans don't see
- ✅ Automatic rejection of bot submissions

### 6. **Error Handling**
- ✅ Generic error messages (no sensitive info leaked)
- ✅ Detailed errors logged server-side only
- ✅ Graceful degradation

---

## 🔐 Additional Security Recommendations

### 1. **Use a Dedicated Email Service** (Recommended for Production)

Instead of raw SMTP, use a dedicated email API service for better security, deliverability, and features:

#### **Resend** (Recommended - Modern & Simple)
```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contact@sokogin.com',
  to: 'info@sokogin.com',
  subject: `Contact Form: ${sanitizedSubject}`,
  html: emailHtml,
  replyTo: email,
})
```

**Pricing:** 3,000 emails/month free, then $20/month for 50k emails

#### **SendGrid**
```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

await sgMail.send({
  to: 'info@sokogin.com',
  from: 'contact@sokogin.com',
  subject: `Contact Form: ${sanitizedSubject}`,
  html: emailHtml,
  replyTo: email,
})
```

**Pricing:** 100 emails/day free, then $19.95/month for 50k emails

### 2. **Add CAPTCHA** (For High-Traffic Sites)

Prevent automated bot submissions:

```bash
npm install @hcaptcha/react-hcaptcha
# or
npm install react-google-recaptcha
```

```tsx
// In ContactForm component
import HCaptcha from '@hcaptcha/react-hcaptcha'

<HCaptcha
  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
  onVerify={(token) => setHcaptchaToken(token)}
/>
```

### 3. **Upgrade Rate Limiting to Redis/Upstash**

For production, replace in-memory rate limiting:

```bash
npm install @upstash/redis @upstash/ratelimit
```

```typescript
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '1 m'),
})

const { success } = await ratelimit.limit(ip)
if (!success) {
  return NextResponse.json(
    { message: 'Too many requests' },
    { status: 429 }
  )
}
```

**Pricing:** Upstash has a generous free tier

### 4. **Email Authentication (Domain Setup)**

Configure your domain's DNS for better deliverability:

- **SPF Record:** Authorize sending servers
- **DKIM:** Digital signature for authenticity  
- **DMARC:** Policy for handling failed authentication

Example SPF record:
```
v=spf1 include:_spf.privateemail.com ~all
```

### 5. **Monitor & Log Suspicious Activity**

Add logging for security events:

```typescript
// Log suspicious patterns
if (message.toLowerCase().includes('viagra') || 
    email.includes('..') ||
    name.length > 100) {
  console.warn('Suspicious submission:', { ip, email, name })
}
```

Consider using services like:
- **Sentry** - Error tracking and monitoring
- **LogRocket** - Session replay and monitoring
- **Vercel Analytics** - Built-in analytics

### 6. **Content Security Policy (CSP)**

Add CSP headers in `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
```

---

## 🔍 Security Checklist

- [x] SMTP credentials in environment variables
- [x] Server-side email sending
- [x] Input validation & sanitization
- [x] Rate limiting (basic)
- [x] Honeypot bot detection
- [x] Error message sanitization
- [ ] CAPTCHA (optional, for high-traffic)
- [ ] Dedicated email service (Resend/SendGrid)
- [ ] Production-grade rate limiting (Upstash)
- [ ] Email authentication (SPF/DKIM/DMARC)
- [ ] Security monitoring & logging

---

## 📝 Environment Variables to Set in Vercel

**Required:**
```
SMTP_HOST=mail.privateemail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@sokogin.com
SMTP_PASSWORD=your-password-here
SMTP_FROM=info@sokogin.com
```

**Optional (if using services):**
```
RESEND_API_KEY=re_xxxxx
SENDGRID_API_KEY=SG.xxxxx
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=xxxxx
HCAPTCHA_SECRET_KEY=xxxxx
UPSTASH_REDIS_REST_URL=xxxxx
UPSTASH_REDIS_REST_TOKEN=xxxxx
```

---

## 🚨 What NOT to Do

❌ Never commit `.env.local` or `.env` files to git  
❌ Never expose API keys or passwords in client-side code  
❌ Never return detailed error messages to clients  
❌ Never trust user input - always validate and sanitize  
❌ Never store passwords in plain text  
❌ Never disable CORS without understanding the risks

---

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [Nodemailer Security](https://nodemailer.com/about/security/)
