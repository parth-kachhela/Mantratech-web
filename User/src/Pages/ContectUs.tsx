import { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const locations = {
  Rajkot:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.610226587778!2d70.782851!3d22.2733226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cae194cc94ed%3A0x82e4eb8f6703e3a9!2sUniversity%20Rd%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718164930000!5m2!1sen!2sin",
  Ahmedabad:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9453673121353!2d72.571362!3d23.0225056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f20a42d98d%3A0x59b5cf9b0ef2ec9d!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718165070000!5m2!1sen!2sin",
  Bengaluru:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.994440537891!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e5a08423%3A0x7e46a674340c050!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718165100000!5m2!1sen!2sin",
  Veraval:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1889443231!2d70.3606!3d20.9085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957118fa8e00001%3A0x7b70d1b45c114cc7!2sVeraval%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718165200000!5m2!1sen!2sin",
};

export default function ContactUsPage() {
  const [selectedLocation, setSelectedLocation] = useState("Rajkot");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    email: "",
    other: "",
    enquiryType: "",
  });

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
      const res = await fetch("/api/contact", {
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

      {/* Only this heading has animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }} // ⏱️ Smooth, slower animation
        viewport={{ once: true }}
        className="mt-40 mb-20 px-6 sm:px-12 lg:px-32 text-left"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you. Choose your location and submit your
          query.
        </p>
      </motion.div>

      {/* Map + Location Section (no animation here) */}
      <div className="flex flex-col md:flex-row items-start justify-between p-6 md:p-10 bg-gradient-to-br from-gray-100 to-white gap-10">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Offices</h3>
          <p className="text-gray-600 mb-6">
            Select your nearest location to get directions and support info.
          </p>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select City
              </label>
              <select
                className="w-full p-2 rounded-lg border border-gray-300"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {Object.keys(locations).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

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
        </div>

        <div className="md:w-1/2 w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={locations[selectedLocation]}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section (no animation) */}
      <section className="bg-[#1a1a1a] text-white px-6 sm:px-12 lg:px-32 py-20">
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
