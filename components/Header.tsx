import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Baby } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wishlist } = useWishlist();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path 
    ? "text-primary font-semibold" 
    : "text-gray-600 hover:text-primary transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="bg-primary/20 p-2 rounded-full">
              <Baby className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Little One</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/catalog" className={isActive('/catalog')}>All Products</Link>
            <Link to="/catalog?category=baby-boy" className={isActive('/catalog?category=baby-boy')}>Baby Boy</Link>
            <Link to="/catalog?category=baby-girl" className={isActive('/catalog?category=baby-girl')}>Baby Girl</Link>
          </nav>

          {/* Icons */}
          {/* <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button className="md:hidden p-2 text-gray-600" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div> */}
          <div></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/catalog" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={closeMenu}>
              Shop All
            </Link>
            <Link to="/catalog?category=baby-boy" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={closeMenu}>
              Baby Boy
            </Link>
            <Link to="/catalog?category=baby-girl" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" onClick={closeMenu}>
              Baby Girl
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};