import { motion } from "framer-motion";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-cookie-policy">
              Cookie Policy
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
                <h2 className="text-2xl font-bold text-black mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner (in this case, Print Mega Store) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies."
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Why We Use Cookies</h2>
                <p className="mb-4">
                  Print Mega Store uses cookies for several purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To ensure our website functions properly</li>
                  <li>To remember your preferences and settings</li>
                  <li>To keep track of items in your shopping cart</li>
                  <li>To analyze how visitors use our website</li>
                  <li>To personalize your experience</li>
                  <li>To deliver targeted advertisements</li>
                  <li>To measure the effectiveness of our marketing campaigns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are strictly necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Session management cookies</li>
                  <li>Shopping cart cookies</li>
                  <li>Authentication cookies</li>
                  <li>Security cookies</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Analytics Cookies</h3>
                <p className="mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and anonymous.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Google Analytics:</strong> Used to analyze website traffic and user behavior</li>
                  <li><strong>Google Tag Manager:</strong> Used to manage analytics and marketing tags</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Functional Cookies</h3>
                <p className="mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Language preference cookies</li>
                  <li>Location preference cookies</li>
                  <li>User preference cookies</li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Marketing & Advertising Cookies</h3>
                <p className="mb-4">
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Microsoft Advertising (Bing Ads):</strong> Used for conversion tracking and remarketing on Microsoft properties</li>
                  <li><strong>Google Ads:</strong> Used for conversion tracking and remarketing across Google's network</li>
                  <li><strong>Meta (Facebook) Pixel:</strong> Used for conversion tracking and remarketing on Facebook and Instagram</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Third-Party Cookies</h2>
                <p className="mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Ecwid (Lightspeed):</strong> Our ecommerce platform uses cookies for shopping cart functionality, checkout, and order processing.</li>
                  <li><strong>Google:</strong> For analytics and advertising services.</li>
                  <li><strong>Microsoft:</strong> For advertising and analytics services.</li>
                  <li><strong>Meta:</strong> For advertising and social media integration.</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">How to Manage Cookies</h2>
                <p className="mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:
                </p>
                
                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Browser Settings</h3>
                <p className="mb-4">
                  Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. The following links may be helpful:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Apple Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Microsoft Edge</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Opt-Out Tools</h3>
                <p className="mb-4">
                  You can also opt out of certain cookies using the following tools:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Digital Advertising Alliance (DAA)</a></li>
                  <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Network Advertising Initiative (NAI)</a></li>
                  <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">European Interactive Digital Advertising Alliance (EDAA)</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Impact of Disabling Cookies</h2>
                <p>
                  Please note that if you choose to block or delete cookies, some features of our website may not function properly. For example, you may not be able to add items to your shopping cart, proceed to checkout, or use any website features that require you to sign in. Essential cookies cannot be disabled as they are necessary for the website to function.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Cookie Retention</h2>
                <p className="mb-4">
                  The length of time a cookie remains on your device depends on whether it is a "persistent" or "session" cookie:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> These cookies are temporary and are deleted when you close your browser.</li>
                  <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you manually delete them. The retention period varies depending on the cookie's purpose, typically ranging from a few days to two years.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Updates to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the "Last updated" date at the top of this policy. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> info@printmegastore.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Printer Avenue, Tech District, NY 10001, United States
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
