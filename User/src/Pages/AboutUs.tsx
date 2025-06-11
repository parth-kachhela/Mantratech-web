import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

export default function AboutUs() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full bg-white flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-600 to-blue-600 rotate-[-3deg] origin-top-left z-0" />
        <motion.div
          className="relative z-10 text-center max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white">About Us</h1>
          <p className="text-lg text-white mt-4">
            Empowering innovation and growth through reliable IT solutions.
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="team.png"
            alt="Team"
            className="rounded-3xl object-cover w-90 h-90"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-[#e60000] mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              MantraTechSystem is an emerging IT services company based in
              Veraval, Junagadh, and Rajkot. We specialize in scalable software
              development, web solutions, and cloud-based services tailored for
              startups and growing businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#e60000] mb-8">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="text-gray-700">
                To provide innovative, secure, and scalable IT solutions that
                help businesses achieve digital excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Vision</h3>
              <p className="text-gray-700">
                To become the most trusted technology partner in Gujarat by
                enabling rapid and sustainable business growth through IT.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold">MantraTechSystem</h4>
            <p className="text-sm mt-2 text-gray-400">
              Providing expert web development and IT solutions in Veraval,
              Junagadh, and Rajkot.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 text-sm text-gray-400 space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-sm text-gray-400 mt-2">
              Email: contact@mantratechsystem.com
              <br />
              Phone: +91-8200197878
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} MantraTechSystem. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
