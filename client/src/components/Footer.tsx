import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { useLocation } from 'wouter';
import { Heart, GraduationCap, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [, navigate] = useLocation();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '#' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const courseLinks = [
    { label: 'Navodaya Preparation', href: '/courses/navodaya' },
    { label: 'Sainik School Prep', href: '/courses/sainik' },
    { label: 'Military School Prep', href: '/courses/military' },
    { label: 'Sports Training', href: '/courses/sports' },
    { label: 'Regular Classes', href: '/courses/regular' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 dark:from-gray-900 dark:to-gray-800 text-white transition-colors">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663486477596/YvGxk5M77aGQy6jNB99hVn/ll_350f197f.png" 
                alt="Rise Academy Bansur Logo" 
                className="w-32 h-auto object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-purple-100 dark:text-gray-400 text-sm leading-relaxed">
              Nurturing young minds with world-class education, expert guidance, and holistic development since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-200 dark:text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-purple-100 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-200 dark:text-purple-300">Our Courses</h4>
            <ul className="space-y-2">
              {courseLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-purple-100 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-200 dark:text-purple-300">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-purple-100 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors text-sm group">
                <Phone size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@school.edu" className="flex items-start gap-3 text-purple-100 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors text-sm group">
                <Mail size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@school.edu</span>
              </a>
              <div className="flex items-start gap-3 text-purple-100 dark:text-gray-400 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 School Road<br />Education City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-700 dark:border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-purple-100 dark:text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Excellence Academy. All rights reserved. | Designed with <Heart size={14} className="inline text-red-500" /> for education
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-purple-200 dark:text-purple-300 text-sm font-semibold">Follow Us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-10 h-10 bg-purple-700 dark:bg-gray-700 hover:bg-purple-600 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex gap-4 text-sm">
            <button
              onClick={() => navigate('#')}
              className="text-purple-100 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-purple-400">|</span>
            <button
              onClick={() => navigate('#')}
              className="text-purple-100 hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <span className="text-purple-400">|</span>
            <button
              onClick={() => navigate('#')}
              className="text-purple-100 hover:text-white transition-colors"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* Top Footer Bar - Quick Info */}
      <div className="bg-purple-950 py-3 px-4 md:px-8 border-t border-purple-800">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-purple-200">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-purple-300" />
              <span>Admission Hotline: +91 98765 43210</span>
            </div>
            <span className="hidden md:inline">|</span>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-purple-300" />
              <span>Mon - Fri: 8:00 AM - 4:00 PM</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-purple-300" />
              <span>Affiliation: CBSE | ICSE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
