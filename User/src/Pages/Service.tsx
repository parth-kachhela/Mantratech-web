"use client";

import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { CheckCircle } from "lucide-react";
import { services } from "@/lib/utils";

export default function Services() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[65vh] mt-20 bg-gradient-to-r from-[#e60000] to-[#600000] text-white flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/servicevid.mp4"
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute  inset-0  z-10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">
            Our Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Explore how MantraTechSystem helps businesses scale with modern tech
            solutions and elegant digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white shadow-xl rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-xl shadow-md"
              />

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#e60000] mb-6">
                  {service.title}
                </h2>
                <ul className="space-y-3 mb-6">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-[#e60000] mt-1" />
                      <span className="leading-relaxed text-base">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <a
                  href="/get-service-form"
                  className="inline-block px-6 py-2 bg-[#e60000] text-white rounded-lg shadow hover:bg-[#c40000] transition"
                >
                  Get Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
