import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { teams, leaders } from "@/lib/utils";

export default function AboutUs() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* Hero Section with Video */}
      <div className="relative h-[60vh] mt-20 w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/grid2.mp4"
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 z-10" />
        </div>

        {/* Centered Content */}
        <motion.div
          className="relative z-20 w-full max-w-6xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-[#e60000] drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
            Empowering innovation and growth through reliable IT solutions.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      {/* Meet Our Teams (Full-width Product Style) */}
      <section className="bg-white py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#e60000]">
          Meet Our Teams
        </h2>

        <div className="space-y-24 max-w-7xl mx-auto px-4 md:px-8">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl shadow-lg ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-[#fdfbfb] to-[#ebedee]"
                  : "bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2]"
              }`}
            >
              {/* Left side: text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-[#222] mb-4">
                  {team.name}
                </h3>
                <p className="text-gray-700 mb-4">{team.description}</p>
                <p className="text-gray-600 text-sm">{team.fullDetails}</p>
              </div>

              {/* Right side: images */}
              <div className="flex-1 flex justify-center space-x-4">
                {team.members.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Member ${i + 1}`}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover hover:scale-105 transform transition duration-300"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CEO/President Section */}
      <section className="bg-[url('/leaders-bg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-opacity-80 py-20 px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Leadership That Inspires
        </h2>
        <div className="flex justify-center gap-12 flex-wrap">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative group text-center text-white w-[250px]"
            >
              <img
                src={leader.image}
                className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-[320px] object-cover"
                alt={leader.name}
              />
              <h3 className="mt-4 text-xl font-semibold group-hover:text-[#e60000] transition-colors duration-300">
                {leader.name}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-gray-500 transition-colors duration-300">
                {leader.role}
              </p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileHover={{ height: "auto", opacity: 1 }}
                className="overflow-hidden text-sm text-gray-400 mt-2 transition-all duration-500 ease-in-out"
              >
                {leader.bio}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-br from-[#f6f6f6] to-[#e0e0e0] py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#e60000] mb-10">
            Our Vision
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            At MantraTechSystem, our vision is to be the region’s most trusted
            tech partner — fostering innovation that is not only scalable and
            secure, but also socially responsible. We aim to uplift
            organizations by delivering forward-thinking technology that aligns
            with user needs, market trends, and future readiness.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
