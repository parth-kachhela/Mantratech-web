import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const industries = [
  {
    title: "Healthcare",
    icon: "/industries/healthcare.jpg",
    description:
      "HIPAA-compliant apps, telemedicine platforms, and smart diagnostics for modern healthcare.",
  },
  {
    title: "Finance",
    icon: "/industries/banking.jpg",
    description:
      "Secure fintech solutions, AI-based fraud detection, and seamless payment systems.",
  },
  {
    title: "Education",
    icon: "/industries/education.png",
    description:
      "E-learning platforms, virtual classrooms, and student analytics built for the future.",
  },
  {
    title: "Retail",
    icon: "/industries/retail.jpg",
    description:
      "Omnichannel eCommerce, inventory automation, and CRM systems that boost conversions.",
  },
  {
    title: "Logistics",
    icon: "/industries/logistics.jpg",
    description:
      "Fleet tracking, warehouse automation, and route optimization tailored for logistics.",
  },
  {
    title: "Communication",
    icon: "/industries/communication.jpg", // Make sure this icon exists in your public/icons folder
    description:
      "We build real-time messaging platforms, video conferencing tools, and VoIP systems to streamline communication.",
  },
];

export default function Industries() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div className="relative mt-20 h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/industriesvid.mp4"
          />
          <div className="absolute inset-0  z-10" />
        </div>
        <motion.div
          className="relative z-20 w-full max-w-5xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-[#e60000] drop-shadow-lg">
            Industries We Serve
          </h1>
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
            Driving digital transformation across key sectors with tailored IT
            solutions.
          </p>
        </motion.div>
      </div>

      {/* Industry Cards */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#e60000] mb-16">
          Industries We Empower
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-3xl p-6 shadow-lg backdrop-blur-xl bg-white/30 border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out`}
            >
              <div className="w-14 h-14 rounded-full bg-white/40 backdrop-blur flex items-center justify-center mb-4">
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Delivered", value: "100+" },
            { label: "Team Members", value: "30+" },
            { label: "Operational Cities", value: "3+" },
            { label: "Client Satisfaction", value: "99%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-bold text-[#e60000]">
                {stat.value}
              </h3>
              <p className="text-gray-800 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e60000] text-white py-14 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Want to Elevate Your Industry?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Partner with MantraTechSystem for innovative, scalable, and
          industry-focused IT solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#e60000] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Let’s Talk
        </a>
      </section>

      <Footer />
    </div>
  );
}
