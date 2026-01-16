import { motion } from "framer-motion";
import { Users, Target, Award, MapPin, Mail, Phone, Printer, ShieldCheck, Truck, HeartHandshake } from "lucide-react";
import Lottie from "lottie-react";
import briefcaseAnimation from "@assets/briefcase_1768334865450.json";
import giftAnimation from "@assets/gift_1768334880508.json";
import ideaAnimation from "@assets/idea_1768334892456.json";
import shoppingCartAnimation from "@assets/shopping-cart_1768334943652.json";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              About Print Mega Store
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black" data-testid="heading-about">
              Your Trusted Source for Home and Office Printers
            </h1>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Print Mega Store is an independent online retailer serving customers in the United States. Our current catalog includes HP-branded printers. We operate independently and are not affiliated with, endorsed by, or sponsored by HP or any manufacturer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={briefcaseAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">Who We Are</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Print Mega Store was built to remove confusion from buying printers online. We specialize exclusively in printers and scanners, allowing us to focus on quality, performance, and value. Our team picks products from trusted manufacturers. This helps ensure good results when you print documents, reports, photos, or business materials.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={giftAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">What We Offer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our catalog features a wide range of printing equipment designed for different use cases and budgets. Customers can look at small wireless home printers, fast office printers, and advanced multifunction devices. We offer inkjet printers with ink tanks and laser printers optimized for speed, durability, and high print volumes.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={ideaAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">
                  Printing Solutions for Every User
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Print Mega Store provides printing solutions for every type of user. Home users benefit from compact inkjet printers that produce high quality photo and document prints with minimal setup. Small business users depend on multifunction printers with automatic duplex printing to reduce paper use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={shoppingCartAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">
                  Easy and Secure Online Shopping
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Buying printers online should be convenient and secure. Print Mega Store has clear prices. They ensure safe payment processing. Strong encryption keeps your personal and payment information secure. We provide quick shipping, fair delivery rates, and easy returns.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-md p-6 text-center mb-12"
          >
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> HP® is a registered trademark of Hewlett-Packard Development Company, L.P. Print Mega Store is an independent retailer and is not affiliated with, endorsed by, or sponsored by HP Inc. All product names, logos, and trademarks are the property of their respective owners and are used for identification purposes only.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Simplifying Printer Shopping
            </h2>
            <div className="bg-gradient-to-br from-[#33cccc]/10 to-[#33cccc]/5 rounded-xl p-8 border border-[#33cccc]/20 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Our mission is to simplify the process of finding and purchasing quality printing equipment. We believe everyone deserves access to reliable, high-performance printers and scanners at competitive prices, backed by knowledgeable assistance and hassle-free shopping experience."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6 text-white" />,
                color: "from-blue-500 to-blue-600",
                title: "Quality Products",
                desc: "We carefully select products to ensure every item we sell meets high quality standards."
              },
              {
                icon: <HeartHandshake className="w-6 h-6 text-white" />,
                color: "from-green-500 to-green-600",
                title: "Customer First",
                desc: "Your satisfaction is our priority. We provide responsive assistance and stand behind every product."
              },
              {
                icon: <Award className="w-6 h-6 text-white" />,
                color: "from-purple-500 to-purple-600",
                title: "Competitive Pricing",
                desc: "We work hard to offer competitive prices, helping you get the best value for your investment."
              },
              {
                icon: <Truck className="w-6 h-6 text-white" />,
                color: "from-orange-500 to-orange-600",
                title: "Fast Shipping",
                desc: "We partner with trusted carriers to ensure your orders arrive safely and on time."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
                }}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Why Choose Print Mega Store?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Wide selection of printers and scanners from top brands",
              "Competitive pricing with free shipping on orders over $50",
              "30-day hassle-free return policy",
              "Secure checkout with multiple payment options",
              "Dedicated assistance team",
              "Detailed product information and buying guides",
              "Fast order processing and reliable delivery",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
              >
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Contact Information
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We love hearing from our customers! Whether you have a question about a product, need help with an order, or just want to say hello, we're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#33cccc] to-[#29a3a3] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Contact Us</h3>
                  <p className="text-gray-600 text-sm">
                    Email: info@printmegastore.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Mailing Address</h3>
                  <p className="text-gray-600 text-sm">
                    Print Mega Store<br />
                    123 Printer Avenue<br />
                    Tech District, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700">
              Thank you for choosing Print Mega Store. We look forward to serving you!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
