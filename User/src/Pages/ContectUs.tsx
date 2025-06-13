// ContactUsPage.tsx

import { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapOptions = {
  styles: [
    {
      elementType: "geometry",
      stylers: [{ color: "#1d2c4d" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#8ec3b9" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1a3646" }],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [{ color: "#4b6878" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#023e58" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#283d6a" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#304a7d" }],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [{ color: "#98a5be" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0e1626" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4e6d70" }],
    },
  ],
};

const locationData = [
  {
    city: "Rajkot",
    position: { lat: 22.2733, lng: 70.7829 },
  },
  {
    city: "Ahmedabad",
    position: { lat: 23.0225, lng: 72.5714 },
  },
  {
    city: "Bengaluru",
    position: { lat: 12.9716, lng: 77.5946 },
  },
  {
    city: "Veraval",
    position: { lat: 20.9085, lng: 70.3606 },
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 21.7679,
  lng: 72.8716,
};

function OfficeMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC4fDaz9e1DokMCTru8ldQzwQCuHVBnxRA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        options={mapOptions}
        center={center}
        zoom={5}
      >
        {locationData.map((loc, idx) => (
          <Marker key={idx} position={loc.position} title={loc.city} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

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
