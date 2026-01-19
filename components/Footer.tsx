import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MessageCircle, Baby } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
               <div className="bg-brand-600 p-1.5 rounded-lg text-white group-hover:bg-brand-700 transition-colors">
                <Baby className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-brand-600">Little One Store</span>
            </Link>
            <p className="text-gray-500 text-sm mb-4">
              Premium baby clothes in Sri Lanka. Lovingly curated comfort for your little miracles (Ages 0-3).
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone className="h-4 w-4" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-brand-600">+94 77 166 9699</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Collections</h3>
            <ul className="space-y-3">
              <li><Link to="/catalog/baby-boy" className="text-base text-gray-500 hover:text-brand-600">Baby Boy Clothes</Link></li>
              <li><Link to="/catalog/baby-girl" className="text-base text-gray-500 hover:text-brand-600">Baby Girl Dresses</Link></li>
              <li><Link to="/catalog" className="text-base text-gray-500 hover:text-brand-600">New Arrivals</Link></li>
              <li><Link to="/catalog" className="text-base text-gray-500 hover:text-brand-600">Rompers & Onesies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Customer Care</h3>
            <ul className="space-y-3">
              <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="text-base text-gray-500 hover:text-brand-600">Order via WhatsApp</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-brand-600">Shipping Policy</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-brand-600">Size Guide</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-brand-600">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              <a 
                href="https://www.facebook.com/littleoneclothesLanka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2]"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25D366]"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/littleonestore.lk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E4405F]"
                aria-label="Follow us on Instagram"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Little One Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;