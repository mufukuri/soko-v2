import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Soko Gin",
  description: "Privacy Policy for Soko Gin - Learn how we protect your personal information and privacy.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: 17 March 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Soko Gin ("we", "our", or "us"). We are committed to protecting your personal
                  information and your privacy.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This Privacy Policy explains how we collect, use, and safeguard your information when you visit
                  our website and interact with our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  2. Information We Collect
                </h2>
                
                <h3 className="font-serif text-xl tracking-tight text-foreground mb-3 mt-6">
                  a. Information You Provide
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide, including:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">Name</li>
                  <li className="text-muted-foreground">Email address</li>
                  <li className="text-muted-foreground">Phone number</li>
                  <li className="text-muted-foreground">Any information submitted through contact forms, sign-ups, or inquiries</li>
                </ul>

                <h3 className="font-serif text-xl tracking-tight text-foreground mb-3 mt-6">
                  b. Automatically Collected Information
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">IP address</li>
                  <li className="text-muted-foreground">Browser and device information</li>
                  <li className="text-muted-foreground">Pages visited and time spent on the site</li>
                  <li className="text-muted-foreground">Referral links and interactions</li>
                </ul>

                <h3 className="font-serif text-xl tracking-tight text-foreground mb-3 mt-6">
                  c. Cookies and Tracking Data
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to improve user experience and analyze website
                  performance.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">Respond to your inquiries and provide customer support</li>
                  <li className="text-muted-foreground">Process orders and transactions</li>
                  <li className="text-muted-foreground">Send promotional materials and updates (with your consent)</li>
                  <li className="text-muted-foreground">Improve our website and services</li>
                  <li className="text-muted-foreground">Comply with legal obligations</li>
                </ul>
              </div>

              {/* Sharing Your Information */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  4. Sharing Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell or rent your personal information. We may share your information with:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">Service providers who assist us in operating our website and conducting business</li>
                  <li className="text-muted-foreground">Law enforcement or regulatory authorities when required by law</li>
                  <li className="text-muted-foreground">Business partners with your explicit consent</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement reasonable security measures to protect your personal information from unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground">Access, update, or delete your personal information</li>
                  <li className="text-muted-foreground">Opt out of marketing communications</li>
                  <li className="text-muted-foreground">Request a copy of the data we hold about you</li>
                  <li className="text-muted-foreground">Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at the details provided below.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  7. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  8. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the legal drinking age. We do not knowingly
                  collect personal information from minors.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page
                  with an updated effective date.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="font-serif text-3xl tracking-tight text-foreground mb-4">
                  10. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Email:</strong> privacy@sokogin.com
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">Address:</strong> Soko Gin, 7 De Rust Close, Lone Hill, Sandton, Johannesburg
                  </p>
                </div>
              </div>

              {/* Age Verification Notice */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Please drink responsibly. You must be of legal drinking age in your country to purchase Soko Gin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}
