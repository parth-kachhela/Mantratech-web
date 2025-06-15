import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  enquiryType: string;
  other?: string;
  createdAt: string;
}

export default function Dashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingIds, setDeletingIds] = useState<string[]>([]); // ✅ added
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendUrl}/contact`)
      .then((res: any) => {
        if (Array.isArray(res.data)) {
          setContacts(res.data);
        } else {
          throw new Error("Invalid response format");
        }
      })
      .catch((err: any) => {
        console.error("Error fetching contacts:", err);
        setError("Failed to load contacts.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    setDeletingIds((prev) => [...prev, id]); // ✅ start loading for this contact

    try {
      await axios.delete(`${backendUrl}/contact/${id}`);
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete contact");
    } finally {
      setDeletingIds((prev) => prev.filter((delId) => delId !== id)); // ✅ stop loading
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 text-2xl font-bold text-[#e60000] border-b">
          Mantra<span className="text-black">Tech</span>
        </div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-[#e60000]">
            Profile
          </a>
          <a href="#" className="block text-gray-700 hover:text-[#e60000]">
            Contacts
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white shadow flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-semibold text-[#e60000]">Admin Panel</h1>
          <button className="flex items-center text-[#e60000] hover:underline">
            <LogOut className="mr-2" size={18} />
            Logout
          </button>
        </header>

        {/* Contacts Section */}
        <main className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#e60000]">
            Customer Enquiries
          </h2>

          {loading ? (
            <p className="text-gray-500 animate-pulse">Loading contacts...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : contacts.length === 0 ? (
            <p className="text-gray-500">No contacts available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map((contact) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl p-5 shadow hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold mb-1 text-[#e60000]">
                    {contact.firstName} {contact.lastName}
                  </h3>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Mobile:</strong> {contact.mobile}
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Address:</strong> {contact.address}
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>Enquiry Type:</strong> {contact.enquiryType}
                  </p>
                  {contact.other && (
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Other:</strong> {contact.other}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mb-3">
                    Created At: {new Date(contact.createdAt).toLocaleString()}
                  </p>

                  {/* Delete button or loader */}
                  {deletingIds.includes(contact.id) ? (
                    <div className="mt-2 text-sm text-gray-500 animate-pulse">
                      Deleting...
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="mt-2 bg-[#e60000] text-white px-4 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
