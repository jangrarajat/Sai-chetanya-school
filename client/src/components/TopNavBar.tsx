import { Mail, Phone, Instagram, Facebook, Youtube, Clock } from 'lucide-react';

export default function TopNavBar() {
  const schoolInfo = {
    timing: "Mon - Fri: 8:00 AM - 4:00 PM",
    email: "info@school.edu",
    phone: "+91 98765 43210",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 dark:from-gray-900 dark:to-gray-800 text-white py-2 px-4 md:py-3 md:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        {/* Left side - Social Media */}
        <div className="flex items-center gap-2 md:gap-3 order-2 md:order-1">
          <span className="text-xs md:text-sm font-semibold whitespace-nowrap">Follow Us:</span>
          <div className="flex gap-2 md:gap-3">
            <a
              href={schoolInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition hover:scale-110"
              title="Instagram"
            >
              <Instagram size={16} className="md:w-5 md:h-5" />
            </a>
            <a
              href={schoolInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition hover:scale-110"
              title="Facebook"
            >
              <Facebook size={16} className="md:w-5 md:h-5" />
            </a>
            <a
              href={schoolInfo.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition hover:scale-110"
              title="YouTube"
            >
              <Youtube size={16} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Right side - Contact Info */}
        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm order-1 md:order-2">
          <div className="flex items-center gap-1">
            <Phone size={14} className="md:w-4 md:h-4" />
            <a href={`tel:${schoolInfo.phone}`} className="hover:text-yellow-300 transition">
              {schoolInfo.phone}
            </a>
          </div>
          <span className="hidden md:inline text-purple-300">|</span>
          <div className="flex items-center gap-1">
            <Clock size={14} className="md:w-4 md:h-4" />
            <span>{schoolInfo.timing}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
