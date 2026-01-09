import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DoNotSell() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-do-not-sell">
              Do Not Sell My Personal Information
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
                <h2 className="text-2xl font-bold text-black mb-4">Your California Privacy Rights</h2>
                <p>
                  This page is provided in compliance with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). Under these laws, California residents have the right to opt out of the "sale" or "sharing" of their personal information. Print Mega Store respects your privacy and is committed to giving you control over your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">What is "Sale" or "Sharing" of Personal Information?</h2>
                <p className="mb-4">
                  Under the CCPA/CPRA, "sale" of personal information means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating personal information to another business or third party for monetary or other valuable consideration.
                </p>
                <p>
                  "Sharing" means sharing personal information with a third party for cross-context behavioral advertising purposes, even if no money is exchanged. This includes sharing data with advertising networks for targeted advertising.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Personal Information We May Share</h2>
                <p className="mb-4">
                  In the course of operating our business, we may share certain categories of personal information with third parties for advertising and marketing purposes. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identifiers:</strong> Such as device identifiers, IP addresses, and cookie identifiers</li>
                  <li><strong>Internet Activity:</strong> Such as browsing history on our website, search history, and interactions with our advertisements</li>
                  <li><strong>Geolocation Data:</strong> General location information derived from IP address</li>
                  <li><strong>Inferences:</strong> Such as preferences and characteristics derived from your browsing behavior</li>
                </ul>
                <p className="mt-4">
                  This information may be shared with advertising partners including Google, Microsoft, and Meta to deliver targeted advertisements and measure campaign effectiveness.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">How to Opt Out</h2>
                <p className="mb-4">
                  You have several options to opt out of the sale or sharing of your personal information:
                </p>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Option 1: Submit an Opt-Out Request</h3>
                <p className="mb-4">
                  Contact us directly to opt out of the sale or sharing of your personal information:
                </p>
                <div className="bg-[#FFD93D]/10 rounded-xl p-6 mb-6">
                  <p className="mb-4">
                    <strong>Email:</strong> info@printmegastore.com<br />
                    <strong>Subject Line:</strong> "Do Not Sell My Personal Information"
                  </p>
                  <p className="mb-4">Please include in your email:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your full name</li>
                    <li>Email address associated with your account (if any)</li>
                    <li>Statement that you are a California resident</li>
                    <li>Request to opt out of sale/sharing of personal information</li>
                  </ul>
                </div>
                <Button asChild className="bg-[#FFD93D] hover:bg-[#E6C135] text-white mb-6">
                  <a href="mailto:info@printmegastore.com?subject=Do%20Not%20Sell%20My%20Personal%20Information">
                    Submit Opt-Out Request via Email
                  </a>
                </Button>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Option 2: Opt Out of Advertising Platforms</h3>
                <p className="mb-4">
                  You can also opt out directly with our advertising partners:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Google Ad Settings</a></li>
                  <li><strong>Microsoft:</strong> <a href="https://account.microsoft.com/privacy/ad-settings" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Microsoft Privacy Dashboard</a></li>
                  <li><strong>Meta (Facebook):</strong> <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Facebook Ad Preferences</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Option 3: Industry Opt-Out Tools</h3>
                <p className="mb-4">
                  Use these industry-wide opt-out tools to limit targeted advertising across multiple companies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Digital Advertising Alliance (DAA)</a></li>
                  <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[#FFD93D] hover:underline">Network Advertising Initiative (NAI)</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3 mt-6">Option 4: Global Privacy Control</h3>
                <p>
                  We honor the Global Privacy Control (GPC) signal. If you use a browser or extension that sends a GPC signal, we will treat that as a valid opt-out request for the sale or sharing of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Verification Process</h2>
                <p>
                  To protect your privacy and security, we may need to verify your identity before processing your opt-out request. We will use the information you provide in your request to verify your identity. In some cases, we may request additional information to complete the verification process. We will not use any personal information collected for verification purposes for any other purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Authorized Agents</h2>
                <p>
                  You may designate an authorized agent to submit an opt-out request on your behalf. If you use an authorized agent, we may require: (1) proof of your written authorization for the agent to submit the request, and (2) verification of your identity directly with us. These requirements do not apply if you have provided your authorized agent with power of attorney pursuant to California Probate Code sections 4000 to 4465.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Non-Discrimination Notice</h2>
                <p>
                  Print Mega Store will not discriminate against you for exercising your privacy rights. We will not deny you goods or services, charge you different prices, provide you with a different level of service, or suggest that you may receive a different price or level of service for exercising your rights under the CCPA/CPRA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Response Time</h2>
                <p>
                  We will acknowledge receipt of your opt-out request within 10 business days and will respond to your request within 45 days. If we need additional time to process your request, we will notify you of the extension and the reason for it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Additional California Rights</h2>
                <p className="mb-4">
                  In addition to the right to opt out of sales/sharing, California residents have the following rights under CCPA/CPRA:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Know:</strong> You can request information about the personal information we collect, use, and disclose.</li>
                  <li><strong>Right to Delete:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
                  <li><strong>Right to Correct:</strong> You can request that we correct inaccurate personal information.</li>
                  <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You can limit our use of sensitive personal information.</li>
                </ul>
                <p className="mt-4">
                  For more information about your privacy rights, please see our <a href="/privacy" className="text-[#FFD93D] hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this page or your California privacy rights, please contact us:
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
