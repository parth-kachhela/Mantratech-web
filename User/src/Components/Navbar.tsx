import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/service" },
    { label: "Industries", path: "/industries" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 z-50 border-b border-gray-200 shadow-sm backdrop-blur-md">
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

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-sm font-medium space-x-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#e60000] transition"
              onClick={() => navigate(item.path)}
            >
              <span className="hover:border-r-4 hover:border-[#e60000] pr-2 transition-all duration-200">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with animation */}
      <div
        className={`md:hidden transition-all duration-1000 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white backdrop-blur-md shadow-xl px-6 py-4`}
      >
        <ul className="flex flex-col space-y-4 text-base font-semibold text-gray-800">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer relative group"
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
            >
              <span className="group-hover:text-[#e60000] transition duration-200">
                {item.label}
              </span>
              <div className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e60000] group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
