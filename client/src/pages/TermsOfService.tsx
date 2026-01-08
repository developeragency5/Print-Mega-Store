import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-terms-of-service">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-acceptance">Acceptance of Terms</h2>
                <p>
                  Welcome to Print Mega Store. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. Print Mega Store is an independent printer retailer serving customers across the United States, and these terms govern your use of our services and website.
                </p>
                <p className="mt-4">
                  These Terms of Service constitute a legally binding agreement between you and Print Mega Store. Your continued use of the website following any changes to these terms constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-use-of-website">Use of Website</h2>
                <p className="mb-4">By using our website, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website only for lawful purposes and in accordance with these Terms</li>
                  <li>Not use the website in any way that violates any applicable federal, state, or local law or regulation</li>
                  <li>Not attempt to interfere with the proper working of the website</li>
                  <li>Not use any robot, spider, or other automatic device to access the website</li>
                  <li>Not introduce any viruses, trojan horses, worms, or other malicious material</li>
                  <li>Not attempt to gain unauthorized access to any portion of the website</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to terminate or suspend your access to the website immediately, without prior notice, for any breach of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-account-responsibilities">Account Responsibilities</h2>
                <p className="mb-4">
                  When you create an account with Print Mega Store, you are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account and password</li>
                  <li>Restricting access to your computer and account</li>
                  <li>Accepting responsibility for all activities that occur under your account</li>
                  <li>Providing accurate, current, and complete information during registration</li>
                  <li>Updating your information to keep it accurate and current</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="mt-4">
                  You must be at least 18 years old to create an account and make purchases on our website. Print Mega Store reserves the right to refuse service, terminate accounts, or cancel orders at our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-product-information">Product Information Disclaimer</h2>
                <p>
                  Print Mega Store strives to provide accurate product descriptions, specifications, and pricing information. However, we do not warrant that product descriptions, pricing, or other content on our website is accurate, complete, reliable, current, or error-free. Product images are for illustrative purposes only and may not exactly represent the actual product.
                </p>
                <p className="mt-4">
                  If a product offered by Print Mega Store is not as described, your sole remedy is to return it in unused condition in accordance with our Return Policy. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-intellectual-property">Intellectual Property</h2>
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Print Mega Store or its content suppliers and is protected by United States and international copyright laws.
                </p>
                <p className="mt-4">
                  The Print Mega Store name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Print Mega Store. You may not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on this website are the trademarks of their respective owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-limitation-liability">Limitation of Liability</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, PRINT MEGA STORE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your access to or use of (or inability to access or use) the website</li>
                  <li>Any conduct or content of any third party on the website</li>
                  <li>Any content obtained from the website</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p className="mt-4">
                  In no event shall Print Mega Store's total liability exceed the amount you paid for the products giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-indemnification">Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless Print Mega Store, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your violation of these Terms of Service</li>
                  <li>Your use of the website</li>
                  <li>Your violation of any third-party rights, including intellectual property rights</li>
                  <li>Any claim that your use of the website caused damage to a third party</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-governing-law">Governing Law</h2>
                <p>
                  These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the United States of America and the State of New York, without regard to its conflict of law provisions.
                </p>
                <p className="mt-4">
                  Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the federal or state courts located in New York County, New York, and you consent to the personal jurisdiction of such courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-dispute-resolution">Dispute Resolution</h2>
                <p>
                  Any dispute, controversy, or claim arising out of or relating to these Terms of Service shall first be attempted to be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules.
                </p>
                <p className="mt-4">
                  The arbitration shall take place in New York, New York. The decision of the arbitrator shall be final and binding on both parties. Judgment on the award may be entered in any court having jurisdiction. You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-modifications">Modifications to Terms</h2>
                <p>
                  Print Mega Store reserves the right to modify or replace these Terms of Service at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="mt-4">
                  By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-contact-terms">Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> support@printmegastore.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Printer Avenue, Tech District, NY 10001
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
