// src/pages/services.tsx
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

const services = [
  {
    title: "Custom Web Development",
    description:
      "Tailored web solutions using the latest frameworks and technologies to meet your business goals.",
    image: "/images/web-development.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless performance and experience.",
    image: "/images/mobile-app.jpg",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure and DevOps automation for faster deployment and better efficiency.",
    image: "/images/cloud.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting engaging user interfaces and experiences that drive user satisfaction and retention.",
    image: "/images/uiux.jpg",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Robust security practices and tools to protect your digital assets and infrastructure.",
    image: "/images/cybersecurity.jpg",
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance on digital transformation, system architecture, and technology strategies.",
    image: "/images/consulting.jpg",
  },
];

export default function Services() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      <section className="pt-28 pb-16 px-4 md:px-10 bg-gray-50 min-h-screen">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#e60000] mb-4">
            Our services
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Empowering your business with a full spectrum of IT services
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((cap, index) => (
              <motion.div
                key={index}
                className="rounded-3xl overflow-hidden shadow-md group bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-[#e60000] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
