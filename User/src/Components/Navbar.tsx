// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "About Us", path: "/about" },
    { label: "Capabilities", path: "/capabilities" },
    { label: "Industries", path: "/industries" },
    { label: "Insights", path: "/insights" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-12 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/blogo.png"
            alt="MantraTechSystem Logo"
            className="h-16 w-16 object-contain text-orange-950"
          />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation items */}
        <ul
          className={`md:flex text-sm font-medium hidden md:flex-row space-x-6 ${
            menuOpen
              ? "block absolute top-20 bg-white left-0 w-full px-4 py-4"
              : "hidden"
          } md:block`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:text-[#e60000] transition"
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false); // Close mobile menu after click
              }}
            >
              <span className="hover:border-r-4 hover:border-[#e60000] pr-2 transition-all duration-200">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
