import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { jobOpenings } from "@/lib/utils";

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animated Stats State
  const [employees, setEmployees] = useState(0);
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);

  // Animate counters
  useEffect(() => {
    const animateValue = (setFn: any, target: number, delay = 20) => {
      let current = 0;
      const increment = Math.ceil(target / 50);
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setFn(current);
      }, delay);
    };

    animateValue(setEmployees, 30);
    animateValue(setProjects, 100);
    animateValue(setCustomers, 200);
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-4 pt-20 bg-gradient-to-br from-[#fef9f9] via-[#fff] to-[#f8f8f8]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#e60000] mb-4">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            At Mantra<span className="text-black">Tech</span>System, we’re on a
            mission to build the future of IT — fast, bold, and innovative.
          </p>
        </motion.div>
      </section>

      {/* Animated Stats Section */}
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold text-[#e60000] mb-10">
            We're Growing Fast!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">
                {employees}+
              </h3>
              <p className="text-lg text-gray-600">Employees Hired Monthly</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">
                {projects}+
              </h3>
              <p className="text-lg text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">
                {customers}+
              </h3>
              <p className="text-lg text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-semibold text-[#e60000] text-center mb-12">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 + index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-black mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{job.location}</p>
                <p className="text-sm text-gray-500 mb-3">{job.type}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <button className="px-4 py-2 text-sm bg-[#e60000] text-white rounded-full hover:bg-red-600 transition">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-[#e60000]">
            Why Work With Us?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-6">
            We value creativity, ownership, and speed. We offer a collaborative
            environment where your ideas are heard and your work makes real
            impact.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="w-64 p-6 rounded-xl border text-left">
              <h4 className="font-semibold text-lg mb-2">Flexible Hours</h4>
              <p className="text-sm text-gray-600">
                Balance your life and work with hybrid or remote options.
              </p>
            </div>
            <div className="w-64 p-6 rounded-xl border text-left">
              <h4 className="font-semibold text-lg mb-2">Career Growth</h4>
              <p className="text-sm text-gray-600">
                Upskill with mentorship, learning budgets, and new challenges.
              </p>
            </div>
            <div className="w-64 p-6 rounded-xl border text-left">
              <h4 className="font-semibold text-lg mb-2">Impactful Work</h4>
              <p className="text-sm text-gray-600">
                Build real-world solutions for clients across industries.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#e60000] text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Let’s Grow Together</h2>
          <p className="text-lg mb-6">
            Don’t see a role that fits? Drop your resume and let’s talk.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#e60000] rounded-full font-medium hover:bg-gray-100 transition"
          >
            Send Resume
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
