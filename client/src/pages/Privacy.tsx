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

            <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
              <p className="text-gray-700">
                <strong>Business Name:</strong> Print Mega Store<br />
                <strong>Email:</strong> info@printmegastore.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Printer Avenue, Tech District, NY 10001, United States
              </p>
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
                <p>
                  Print Mega Store ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By using our website, you consent to the data practices described in this policy.
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
                  <li>Respond to your inquiries and provide assistance</li>
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
                <h2 className="text-2xl font-bold text-black mb-4">Cookies & Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, personalize content, and serve targeted advertisements. Cookies are small text files stored on your device that help us recognize you and remember your preferences.
                </p>
                <p className="mb-4"><strong>Types of cookies we use:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly, including shopping cart and checkout functionality.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve user experience.</li>
                  <li><strong>Marketing Cookies:</strong> Used to track visitors across websites and display relevant advertisements.</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings for a personalized experience.</li>
                </ul>
                <p>
                  You can control cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. For more information, please see our <a href="/cookies" className="text-[#FFD93D] hover:underline">Cookie Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Analytics & Tracking Tools</h2>
                <p className="mb-4">
                  We use various analytics and tracking tools to understand how visitors use our website and to improve our services. These tools may collect information about your browsing behavior, including pages visited, time spent on pages, and actions taken.
                </p>
                <p className="mb-4"><strong>Analytics tools we use:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect anonymous data about your visit. For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Google's Privacy Policy</a>.</li>
                  <li><strong>Google Tag Manager:</strong> Used to manage website tags and tracking scripts efficiently.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Advertising & Remarketing</h2>
                <p className="mb-4">
                  We use advertising and remarketing services to show you relevant ads on other websites after you visit our site. These services use cookies and similar technologies to track your browsing activity and serve personalized advertisements.
                </p>
                <p className="mb-4"><strong>Advertising platforms we use:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Microsoft Advertising (Bing Ads):</strong> We use Microsoft Advertising to display ads on Microsoft properties and partner sites. Microsoft may collect data about your visits to serve relevant ads. For more information, see <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Microsoft's Privacy Statement</a>.</li>
                  <li><strong>Google Ads:</strong> We use Google Ads for search and display advertising. Google may use cookies to serve ads based on your prior visits. For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Google's Privacy Policy</a>.</li>
                  <li><strong>Meta (Facebook) Pixel:</strong> We use Meta Pixel to measure ad effectiveness and serve targeted ads on Facebook and Instagram. For more information, see <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Meta's Privacy Policy</a>.</li>
                </ul>
                <p className="mb-4"><strong>Opting Out of Personalized Advertising:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Google Ad Settings</a></li>
                  <li>Microsoft: <a href="https://account.microsoft.com/privacy/ad-settings" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Microsoft Privacy Dashboard</a></li>
                  <li>Meta: <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Facebook Ad Preferences</a></li>
                  <li>Industry-wide opt-out: <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Digital Advertising Alliance</a></li>
                </ul>
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
                  <li>Opt out of the sale of your personal information (for California residents)</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at info@printmegastore.com. California residents may also visit our <a href="/do-not-sell" className="text-[#FFD93D] hover:underline">Do Not Sell My Personal Information</a> page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">California Privacy Rights (CCPA)</h2>
                <p className="mb-4">
                  If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Know:</strong> You can request information about the personal data we collect, use, and share.</li>
                  <li><strong>Right to Delete:</strong> You can request deletion of your personal data, subject to certain exceptions.</li>
                  <li><strong>Right to Opt-Out:</strong> You can opt out of the sale of your personal information.</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
                </ul>
                <p className="mt-4">
                  For more information, please visit our <a href="/do-not-sell" className="text-[#FFD93D] hover:underline">Do Not Sell My Personal Information</a> page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> info@printmegastore.com<br />
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
