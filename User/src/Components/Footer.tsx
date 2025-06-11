export default function Footer() {
  return (
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
            <li>About Us</li>
            <li>Capabilities</li>
            <li>Industries</li>
            <li>Contact Us</li>
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
  );
}
