import { FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">NxtTrip</h2>
          <p className="text-sm text-gray-400">
            Connect with fellow travelers. Share memories. Explore the world — together.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="/feed" className="hover:text-white">Travel Feed</a></li>
            <li><a href="/groups" className="hover:text-white">Groups</a></li>
            <li><a href="/discover" className="hover:text-white">Discover</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/safety" className="hover:text-white">Safety</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Use</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTiktok /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {year} NxtTrip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
