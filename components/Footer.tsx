import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Little One</h3>
            <p className="text-gray-400 text-sm">
              Premium clothing for your little miracles. Quality comfort for ages 0-3.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/catalog" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/catalog?category=baby-boy" className="hover:text-white transition-colors">Baby Boy</Link></li>
              <li><Link to="/catalog?category=baby-girl" className="hover:text-white transition-colors">Baby Girl</Link></li>
              <li><Link to="/catalog?type=accessory" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail size={16} className="mr-2" />
              <span>hello@littleonestore.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Little One Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
