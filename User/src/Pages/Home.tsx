import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { Capabilities, IndustriesName, TeamState } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden pt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-white z-0 rotate-[-3deg] origin-top-left"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 text-left">
          <h1 className="text-2xl mb-1 font-bold text-[#e60000]">
            Mantra<span className="text-black">Tech</span>System
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-black mb-6"
          >
            Scale at Speed™
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-gray-600 max-w-2xl"
          >
            We deliver IT solutions across National and InterNational to help
            businesses grow digitally with innovation and speed.
          </motion.p>
        </div>
        {/* Diagonal Gradient Section */}
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              clipPath: "polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            {" "}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/grid.mp4"
            ></video>{" "}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-4xl font-bold text-center text-[#e60000] mb-14">
          Our Core Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {Capabilities.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-[#e60000] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#e60000] mb-14">
          Industries We Empower
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {IndustriesName.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow p-6 border hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-[#e60000] mb-2">
                {industry}
              </h3>
              <p className="text-gray-700 text-sm">
                Innovative solutions tailored to the needs of the{" "}
                {industry.toLowerCase()} sector.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Delivered", value: TeamState.ProjectsDelivered },
            {
              label: "Employees Hired Monthly",
              value: TeamState.EmployeesHiredMonthly,
            },
            { label: "Country We work", value: TeamState.CitiesWeServe },
            {
              label: "Client Satisfaction",
              value: TeamState.ClientSatisfaction,
            },
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
      <section className="bg-[#e60000] text-white py-16 text-center px-6">
        <h2 className="text-3xl font-semibold mb-3">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Let’s build something incredible together. Start your journey with
          MantraTechSystem today.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#e60000] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
}
