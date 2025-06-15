import { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { OfficeMap } from "@/Components/OfficeMap";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    email: "",
    other: "",
    enquiryType: "",
  });
  const location = useLocation();
  const formRef = useRef<HTMLDivElement>(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    if (location.state?.scrollTo === "contact-form") {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300); // delay to allow DOM to mount
    }
  }, [location]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`"http://localhost:8080/api"/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          mobile: "",
          email: "",
          other: "",
          enquiryType: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Heading with animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mt-40 mb-20 px-6 sm:px-12 lg:px-32 text-left"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you. Choose your location and submit your
          query.
        </p>
      </motion.div>

      {/* Map and office info section */}
      <div className="flex flex-col md:flex-row items-start justify-between p-6 md:p-10 bg-gradient-to-br from-gray-100 to-white gap-10">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Offices</h3>
          <p className="text-gray-600 mb-6">
            Select your nearest location to get directions and support info.
          </p>

          <div className="text-sm text-gray-600">
            <p>
              <strong>Business Hours:</strong>
            </p>
            <p>Mon–Fri: 10:00 AM – 6:00 PM</p>
            <p>Sat–Sun: Closed</p>
            <div className="mt-4">
              <p>
                <strong>Support:</strong>
              </p>
              <p>📞 +91-9876543210</p>
              <p>📧 support@mantratechsystem.com</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <OfficeMap />
        </div>
      </div>

      {/* Contact Form */}
      <section
        id="contact-form"
        ref={formRef}
        className="bg-[#1a1a1a] text-white px-6 sm:px-12 lg:px-32 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-300 mb-10">
            Need more information? We’ll respond within 3–5 working days.
          </p>

          {submitted ? (
            <div className="text-green-400 text-xl font-semibold">
              ✅ Thank you! We’ll be in touch soon.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-400 mb-1">
                  *Type of Enquiry
                </label>
                <select
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-transparent border-b border-gray-500 text-white focus:outline-none"
                >
                  <option value="">-- Select an enquiry type --</option>
                  <option value="General">General</option>
                  <option value="Support">Support</option>
                  <option value="Sales">Sales</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  *First Name
                </label>
                <Input
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  *Last Name
                </label>
                <Input
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  *Email
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  *Mobile Number
                </label>
                <Input
                  name="mobile"
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 text-white focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-400 mb-1">
                  *Address
                </label>
                <Input
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 text-white focus:outline-none w-full"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-400 mb-1">
                  Additional Info
                </label>
                <Textarea
                  name="other"
                  rows={4}
                  value={formData.other}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-500 text-white focus:outline-none w-full"
                />
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black py-4 text-lg font-semibold rounded hover:bg-gray-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
