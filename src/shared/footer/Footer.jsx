import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 relative overflow-hidden">
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#06211B] tracking-widest flex items-center gap-2">
              <span>STALLION</span>
            </div>
          </div>
          <p className="text-[#637381] text-sm leading-relaxed max-w-sm">
            The proper Footer on proper time can preserve you protection. We assist you make sureverybody forward.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: <Facebook size={18} />, link: "#" },
              { icon: <Twitter size={18} />, link: "#" },
              { icon: <Instagram size={18} />, link: "#" },
              { icon: <MessageCircle size={18} />, link: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="w-10 h-10 rounded-full bg-[#06211B] text-white flex items-center justify-center hover:bg-[#EDD191] hover:text-[#06211B] transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold text-[#06211B]">Quick link</h4>
          <div className="w-10 h-1 bg-[#EDD191] -mt-4 mb-2"></div>
          <ul className="flex flex-col gap-4 text-[#637381] text-sm">
            <li><Link to="/" className="hover:text-[#EDD191] transition-colors flex items-center gap-2"><span>›</span> Home</Link></li>
            <li><Link to="/pricing" className="hover:text-[#EDD191] transition-colors flex items-center gap-2"><span>›</span> Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-[#EDD191] transition-colors flex items-center gap-2"><span>›</span> FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#EDD191] transition-colors flex items-center gap-2"><span>›</span> Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold text-[#06211B]">Contact</h4>
          <div className="w-10 h-1 bg-[#EDD191] -mt-4 mb-2"></div>
          <ul className="flex flex-col gap-5 text-[#637381] text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-[#EDD191] shrink-0" />
              <span>44 Danvers, NY City, USA, 70-102</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#EDD191] shrink-0" />
              <span>Lomarc@Lomaroyc.Us</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#EDD191] shrink-0" />
              <span>91+585-656-658</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section with Wave Decor */}
      <div className="relative bg-[#F4F7F7] pt-12 pb-8">
        {/* Wave Overlay SVG Pattern (simplified representation) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 bg-white">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] fill-[#F4F7F7]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center text-[#637381] text-xs font-medium">
          © 2026 Stallion Fantasy League. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
