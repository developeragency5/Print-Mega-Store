import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-privacy">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
                <p>
                  Print Mega Store ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Information We Collect</h2>
                <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, shipping address, and billing information when you make a purchase or create an account.</li>
                  <li><strong>Payment Information:</strong> Credit card details and billing information processed securely through our payment provider (Ecwid/Lightspeed).</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and browsing patterns.</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Email Marketing & Newsletter</h2>
                <p className="mb-4">
                  When you subscribe to our newsletter or provide your email address, you agree to receive promotional emails from Print Mega Store. These emails may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>New product announcements and updates</li>
                  <li>Special offers, discounts, and promotional deals</li>
                  <li>Helpful tips and guides about printers and scanners</li>
                  <li>Company news and updates</li>
                </ul>
                <p className="mt-4">
                  <strong>Your Rights:</strong> You can unsubscribe from our marketing emails at any time by clicking the "unsubscribe" link at the bottom of any email or by contacting us directly. We respect your inbox and will never sell or share your email address with third parties for their marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send you order confirmations and shipping updates</li>
                  <li>Send promotional emails if you have subscribed to our newsletter</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Detect and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our checkout process uses SSL encryption to ensure your payment information is transmitted securely.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Third-Party Services</h2>
                <p>
                  Our website uses Ecwid (Lightspeed) as our ecommerce platform. When you make a purchase, your information is also subject to Ecwid's privacy policy. We may also use third-party analytics services to understand how visitors use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> support@printmegastore.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Printer Avenue, Tech District, NY 10001
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
