import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <>
      <SEO 
        title="Home" 
        description="Little One Store: The best online shop for baby clothes in Sri Lanka. Buy high-quality cotton rompers, dresses, and newborn outfits. Fast island-wide delivery."
        keywords="baby clothes sri lanka, newborn clothes colombo, baby dress online, kids wear sri lanka, infant clothing shop"
      />

      {/* Hero Section */}
      <section className="relative bg-brand-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative z-10">
              <span className="inline-block px-4 py-1.5 bg-white text-brand-600 font-bold rounded-full text-sm shadow-sm mb-2 border border-brand-100">
                New Collection {new Date().getFullYear()}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Best Baby Clothes in <br />
                <span className="text-brand-600">Sri Lanka</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Discover soft, organic cotton outfits for your little one. From newborn essentials to trendy toddler wear, we offer the finest quality at affordable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/catalog" className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Shop Collection
                </Link>
                <Link to="/catalog/baby-girl" className="inline-flex justify-center items-center px-8 py-4 bg-white text-brand-600 font-semibold rounded-full border border-brand-200 hover:border-brand-600 hover:bg-brand-50 transition-colors">
                  Shop Girls
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
               <div className="absolute top-0 right-0 w-72 h-72 bg-brand-200 rounded-full blur-3xl -z-10 opacity-50 animate-pulse"></div>
               <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl -z-10 opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800" 
                 alt="Happy baby wearing comfortable clothes in Sri Lanka" 
                 className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 relative z-10"
                 width="600"
                 height="800"
                 loading="eager"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/catalog/baby-boy" className="relative rounded-lg overflow-hidden group h-64 shadow-md">
               <img src="https://picsum.photos/600/400?random=boy" alt="Baby Boy Clothes Sri Lanka" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                 <span className="text-white text-3xl font-bold tracking-wider border-2 border-white px-6 py-2">BABY BOY</span>
               </div>
            </Link>
            <Link to="/catalog/baby-girl" className="relative rounded-lg overflow-hidden group h-64 shadow-md">
               <img src="https://picsum.photos/600/400?random=girl" alt="Baby Girl Frocks and Dresses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                 <span className="text-white text-3xl font-bold tracking-wider border-2 border-white px-6 py-2">BABY GIRL</span>
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">New Arrivals</h2>
              <p className="text-sm text-gray-500 mt-1">Latest styles for the season</p>
            </div>
            <Link to="/catalog" className="text-brand-600 hover:text-brand-700 font-medium flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features / Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">High Quality Fabric</h3>
              <p className="mt-2 text-sm text-gray-500">Soft, breathable, and durable materials perfect for tropical weather.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Secure Ordering</h3>
              <p className="mt-2 text-sm text-gray-500">Order securely via WhatsApp with our dedicated support team.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Fast Island-wide Delivery</h3>
              <p className="mt-2 text-sm text-gray-500">Get your package delivered anywhere in Sri Lanka within 2-4 days.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;