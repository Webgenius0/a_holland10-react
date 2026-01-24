import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import footerBg from '../../assets/images/footerBottom.png'
import footerLine from '../../assets/images/footerLine.png'

const Footer = () => {
  return (
    <footer className="bg-white pt-20 relative overflow-hidden">
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#06211B] tracking-widest flex items-center gap-2">
              <img src={logo} alt="logo" />
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
          <div className="w-10 h-1  -mt-4 mb-2">
            <img src={footerLine} alt="footerLine" />
          </div>
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
          <div className="w-10 h-1  -mt-4 mb-2">
            <img src={footerLine} alt="footerLine" />
          </div>
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
        <div className="absolute top-0 left-0 w-full leading-none w-full h-full bg-white z-20 ">
          <img src={footerBg} alt="footerBg" className='w-full h-full object-cover' />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center text-[#637381] text-xs font-medium">
          © 2026 Stallion Fantasy League. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
