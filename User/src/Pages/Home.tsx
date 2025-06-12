import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  const { scrollY } = useScroll();
  //@ts-ignore
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Custom Web Development",
      image: "/images/healthcare.jpg",
    },
    {
      title: "Mobile App Development",

      image: "/images/finance.jpg",
    },
    {
      title: "Cloud & DevOps",

      image: "/images/education.jpg",
    },
    {
      title: "UI/UX Design",

      image: "/images/ecommerce.jpg",
    },
    {
      title: "Cybersecurity Solutions",

      image: "/images/cybersecurity.jpg",
    },
    {
      title: "IT Consulting",

      image: "/images/it-infrastructure.jpg",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
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
            We deliver IT solutions across Veraval, Junagadh, and Rajkot to help
            businesses grow digitally with innovation and speed.
          </motion.p>
        </div>
        {/* Diagonal Gradient Section */}
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="w-full h-full bg-gradient-to-r from-yellow-400 via-purple-600 to-blue-600"
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

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h3 className="text-3xl font-semibold mb-12 text-[#e60000]">
            Our Services
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative w-full h-96 rounded-3xl overflow-hidden group"
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-center"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 flex flex-col justify-between p-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2"></h4>
                  </div>
                  <div className="text-left">
                    <button className="mt-4 px-4 py-2 bg-[#e60000] text-white text-xs rounded-full hover:bg-red-600 transition">
                      More Info
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
