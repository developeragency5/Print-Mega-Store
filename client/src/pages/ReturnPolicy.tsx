import { motion } from "framer-motion";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-return-policy">
              Returns & Refunds Policy
            </h1>
            <p className="text-xl text-gray-600 mb-2">Print Mega Store</p>
            <p className="text-gray-600 mb-8">Last Updated: January 2026</p>

            <p className="text-gray-600 mb-8">
              Thank you for shopping at Print Mega Store. We want you to be completely satisfied with your purchase of printers, scanners, and accessories. Please read this Returns & Refunds Policy carefully before placing an order.
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. Eligibility for Returns</h2>
                <p className="mb-4">
                  You may request a return and refund for most products within 30 days of delivery.
                </p>
                <p className="mb-2">To be eligible for a return:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>The item must be unused</li>
                  <li>The item must include original packaging</li>
                  <li>All accessories, manuals, and included parts must be returned</li>
                  <li>The item must not show signs of damage caused by the customer</li>
                </ul>
                <p>
                  Items that do not meet these conditions may be refused a return or may incur a restocking fee.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. How to Initiate a Return</h2>
                <p className="mb-2">To start a return:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Email us at <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a> with your order number and reason for return.</li>
                  <li>We will respond with a Return Merchandise Authorization (RMA) number and instructions.</li>
                  <li>Pack the item securely and ship it back according to our instructions.</li>
                </ol>
                <p>
                  Do not send items back without an RMA number. Returns without an RMA may be refused.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Return Shipping Costs</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If the return is due to a defect or error on our part, we will provide a prepaid return shipping label.</li>
                  <li>If the return is for any other reason (e.g., changed mind, ordered wrong model), the customer is responsible for return shipping costs.</li>
                  <li>For international returns (if allowed), the customer is responsible for all return shipping charges.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Refunds</h2>
                <p className="mb-2">Once your return is received and inspected:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Approved returns will be refunded to your original payment method.</li>
                  <li>Refund processing may take 3–7 business days after we receive the returned item.</li>
                  <li>You will receive an email confirmation when your refund has been issued.</li>
                </ul>
                <p>
                  Original shipping charges are not refundable unless the return is due to a defect or our error.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Defective or Damaged Products</h2>
                <p className="mb-2">If a product arrives damaged or defective:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Email us at <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a> within 7 days of delivery.</li>
                  <li>Include photos of the damage and the packaging.</li>
                  <li>We will provide instructions for return or replacement.</li>
                </ol>
                <p className="mb-2">Damaged products may be eligible for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Replacement</li>
                  <li>Refund</li>
                  <li>Credit toward a future purchase</li>
                </ul>
                <p>
                  Depending on your preference and stock availability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Restocking Fees</h2>
                <p className="mb-2">For non-defective returns, a restocking fee of up to 15% may apply for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Large or bulky equipment</li>
                  <li>Items returned without original accessories</li>
                  <li>Opened software, consumables, or bundled items</li>
                </ul>
                <p>
                  The restocking fee will be deducted from your refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">7. Exchanges</h2>
                <p className="mb-2">We do not automatically exchange items. If you want a different model:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Return the original item for a refund.</li>
                  <li>Place a new order on our website.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">8. Warranty Claims</h2>
                <p className="mb-4">
                  All products are covered by the manufacturer's warranty where applicable (e.g., HP warranty).
                </p>
                <p>
                  Print Mega Store does not provide manufacturer warranty service. Warranty claims must be made directly with the manufacturer and are subject to their terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">9. Return Exceptions</h2>
                <p className="mb-2">The following items cannot be returned unless defective:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Opened consumables (ink cartridges, toner)</li>
                  <li>Software and digital downloads</li>
                  <li>Clearance or special-order products</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Returns & Refunds Policy at any time. Changes take effect when posted on this page with an updated "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p className="mb-4">If you have questions about returns, refunds, or your eligibility:</p>
                <p>
                  Email: <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>
                </p>
                <p className="mt-4">
                  We are happy to assist you with any concerns.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
