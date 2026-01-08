import { motion } from "framer-motion";
import { Users, Target, Award, MapPin, Mail, Phone, Printer, ShieldCheck, Truck, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] mb-6">
                <Printer className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-about">
                About Print Mega Store
              </h1>
              <p className="text-xl text-gray-600">
                Your Trusted Partner for Professional Printing Solutions
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Our Location</h3>
                    <p className="text-gray-600 text-sm">
                      123 Printer Avenue<br />
                      Tech District, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Contact Us</h3>
                    <p className="text-gray-600 text-sm">
                      Email: info@printmegastore.com<br />
                      Phone: +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Who We Are</h2>
                <p className="mb-4">
                  Print Mega Store is a dedicated online retailer specializing in professional printing and scanning equipment for homes, offices, and businesses across the United States. We are a passionate team of printing technology enthusiasts committed to helping our customers find the perfect printing solutions for their unique needs.
                </p>
                <p>
                  Founded with the vision of making quality printing equipment accessible to everyone, Print Mega Store has grown to become a trusted destination for printers, scanners, and multifunction devices. Our team brings together years of experience in consumer electronics and e-commerce to provide an exceptional shopping experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">What We Offer</h2>
                <p className="mb-6">
                  At Print Mega Store, we offer a comprehensive range of printing and scanning solutions to meet every need and budget:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Home Printers", desc: "Compact and affordable printers perfect for everyday home use, school projects, and personal documents." },
                    { title: "Office Printers", desc: "High-volume, reliable printers designed for busy office environments with advanced networking features." },
                    { title: "Inkjet Printers", desc: "Versatile color printers ideal for photos, graphics, and documents with vibrant color reproduction." },
                    { title: "Laser Printers", desc: "Fast, efficient printers for high-volume text documents with crisp, professional results." },
                    { title: "Document Scanners", desc: "From portable scanners to high-speed document feeders for digitizing your paperwork." },
                    { title: "Multifunction Devices", desc: "All-in-one solutions combining printing, scanning, copying, and faxing capabilities." },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
                <div className="bg-gradient-to-br from-[#37AFE1]/10 to-[#37AFE1]/5 rounded-xl p-8 border border-[#37AFE1]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 italic">
                        "Our mission is to simplify the process of finding and purchasing quality printing equipment. We believe everyone deserves access to reliable, high-performance printers and scanners at competitive prices, backed by knowledgeable assistance and hassle-free shopping experience."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <ShieldCheck className="w-6 h-6 text-white" />,
                      color: "from-blue-500 to-blue-600",
                      title: "Quality & Authenticity",
                      desc: "We source products from authorized distributors and manufacturers to ensure every item we sell meets the highest quality standards."
                    },
                    {
                      icon: <HeartHandshake className="w-6 h-6 text-white" />,
                      color: "from-green-500 to-green-600",
                      title: "Customer First",
                      desc: "Your satisfaction is our priority. We provide responsive assistance and stand behind every product we sell."
                    },
                    {
                      icon: <Award className="w-6 h-6 text-white" />,
                      color: "from-purple-500 to-purple-600",
                      title: "Competitive Pricing",
                      desc: "We work hard to offer competitive prices on all our products, helping you get the best value for your investment."
                    },
                    {
                      icon: <Truck className="w-6 h-6 text-white" />,
                      color: "from-orange-500 to-orange-600",
                      title: "Fast & Reliable Shipping",
                      desc: "We partner with trusted carriers to ensure your orders arrive safely and on time, with free shipping on orders over $50."
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Our Team</h2>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Print Mega Store is operated by a dedicated team of e-commerce professionals and printing technology experts based in New York. Our team includes customer service specialists, product researchers, and logistics coordinators who work together to ensure you have the best possible shopping experience.
                    </p>
                  </div>
                </div>
                <p>
                  We continuously research the latest printing technology trends and products to provide you with up-to-date information and recommendations. Our team is available Monday through Friday to assist you with product questions and order inquiries.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Why Choose Print Mega Store?</h2>
                <ul className="space-y-3">
                  {[
                    "Wide selection of printers and scanners from top brands",
                    "Competitive pricing with free shipping on orders over $50",
                    "30-day hassle-free return policy",
                    "Secure checkout with multiple payment options",
                    "Dedicated assistance team",
                    "Detailed product information and buying guides",
                    "Fast order processing and reliable delivery",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Operating Information</h2>
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-black mb-2">Business Details</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Business Name:</strong> Print Mega Store<br />
                        <strong>Business Type:</strong> Online Retail<br />
                        <strong>Industry:</strong> Consumer Electronics / Office Equipment
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">Service Area</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Primary Market:</strong> United States<br />
                        <strong>Shipping:</strong> Continental US, Alaska, Hawaii<br />
                        <strong>Headquarters:</strong> New York, NY
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Get in Touch</h2>
                <p className="mb-4">
                  We love hearing from our customers! Whether you have a question about a product, need help with an order, or just want to say hello, we're here to help.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-black mb-2">Contact Information</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Email:</strong> info@printmegastore.com<br />
                        <strong>Phone:</strong> +1 (555) 123-4567<br />
                        <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">Mailing Address</h3>
                      <p className="text-sm text-gray-600">
                        Print Mega Store<br />
                        123 Printer Avenue<br />
                        Tech District, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="text-center pt-8">
                <p className="text-lg text-gray-700">
                  Thank you for choosing Print Mega Store. We look forward to serving you!
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
