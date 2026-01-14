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
            <p className="text-gray-600 mb-4">
              Last updated: January 2026
            </p>
            <p className="text-gray-600 mb-8">
              Print Mega Store ("we", "our", or "us") is an independent online retailer serving customers in the United States. We provide printers and document scanning products. We are not affiliated with, endorsed by, or sponsored by any manufacturer, including HP Inc.
            </p>
            <p className="text-gray-600 mb-8">
              This Privacy Policy explains how we collect, use, and protect your information when you visit our website or make a purchase.
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information to process orders, provide support, and improve our services.
                </p>
                <p className="mb-2 font-semibold text-black">Information you provide:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Billing and shipping address</li>
                  <li>Order and support details</li>
                </ul>
                <p className="mb-4">
                  Payment information is processed securely by our payment provider. We do not store credit card numbers.
                </p>
                <p className="mb-2 font-semibold text-black">Information collected automatically:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>IP address</li>
                  <li>Browser and device type</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                </ul>
                <p>
                  This data is used for security, fraud prevention, analytics, and site improvements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and ship orders</li>
                  <li>Send order confirmations and tracking updates</li>
                  <li>Provide customer support</li>
                  <li>Prevent fraud and abuse</li>
                  <li>Improve our website and services</li>
                  <li>Send promotional emails (only if you opt in)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Email & Marketing</h2>
                <p className="mb-4">If you subscribe to our mailing list, you may receive:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Product updates</li>
                  <li>Special offers</li>
                  <li>Shopping tips</li>
                </ul>
                <p className="mb-4">
                  You can unsubscribe at any time by clicking the link in our emails or contacting us.
                </p>
                <p>
                  We do not sell or rent your email address.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Payments & Security</h2>
                <p>
                  All payments are handled by secure, PCI-compliant third-party processors. We use SSL encryption and industry-standard security tools to protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Cookies & Tracking</h2>
                <p className="mb-4">We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Remember your cart</li>
                  <li>Improve site performance</li>
                  <li>Analyze traffic</li>
                  <li>Show relevant ads</li>
                </ul>
                <p>
                  You may disable cookies in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Advertising & Analytics</h2>
                <p className="mb-4">We use:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Google Analytics</li>
                  <li>Google Ads</li>
                  <li>Microsoft Advertising</li>
                  <li>Meta (Facebook) Pixel</li>
                </ul>
                <p className="mb-4">
                  These platforms may use cookies to display relevant ads based on your visit to our website.
                </p>
                <p className="mb-2">You may manage ad preferences through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Google Ad Settings</a></li>
                  <li><a href="https://account.microsoft.com/privacy/ad-settings" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Microsoft Privacy Dashboard</a></li>
                  <li><a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-[#33cccc] hover:underline">Facebook Ad Preferences</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">7. Sharing Your Information</h2>
                <p className="mb-4">We may share limited data with:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Payment processors</li>
                  <li>Shipping carriers</li>
                  <li>Analytics and advertising platforms</li>
                </ul>
                <p>
                  Only as needed to operate our business. We do not sell personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">8. Your Rights</h2>
                <p className="mb-4">You may request:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access to your data</li>
                  <li>Corrections</li>
                  <li>Deletion</li>
                  <li>Marketing opt-out</li>
                </ul>
                <p>
                  Contact us at: <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">9. California Residents (CCPA)</h2>
                <p className="mb-4">California residents may:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Request information about their data</li>
                  <li>Request deletion</li>
                  <li>Opt out of data sharing</li>
                </ul>
                <p>
                  Use our <a href="/do-not-sell" className="text-[#33cccc] hover:underline">Do Not Sell My Information</a> page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">10. Independent Retailer Notice</h2>
                <p>
                  Print Mega Store sells products as an independent retailer. We do not manufacture products. Warranty service and technical support are provided by the manufacturer in accordance with their warranty policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">11. Policy Updates</h2>
                <p>
                  We may update this policy from time to time. The current version will always be available on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">12. Contact</h2>
                <p>
                  Email: <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
