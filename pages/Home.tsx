import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <>
      <SEO 
        title="Home" 
        description="Discover the cutest and most comfortable baby clothes at Little One Store. Shop our collection for boys and girls aged 0-3."
      />
      
      {/* Hero Section */}
      <section className="relative bg-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in relative z-10">
              <span className="inline-block px-4 py-1.5 bg-white text-primary font-bold rounded-full text-sm shadow-sm mb-2 border border-blue-100">
                New Collection 2024
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Comfort for your <br />
                <span className="text-primary">Little One</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Soft, sustainable, and stylish clothing designed for your baby's first years. Made with love for ages 0-3.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/catalog" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Shop Now
                </Link>
                <Link to="/catalog?category=baby-girl" className="inline-flex justify-center items-center px-8 py-4 bg-white text-primary font-semibold rounded-full border border-blue-200 hover:border-primary hover:bg-blue-50 transition-colors">
                  Shop Girls
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
               {/* Decorative blobs */}
               <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl -z-10 animate-pulse opacity-50"></div>
               <div className="absolute bottom-0 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl -z-10 opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800" 
                 alt="Happy baby" 
                 className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 relative z-10"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
              <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Free Shipping</h3>
                <p className="text-sm text-gray-500">On all orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
              <div className="p-3 bg-white rounded-full shadow-sm text-accent">
                <Star size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Premium Quality</h3>
                <p className="text-sm text-gray-500">100% Organic Cotton</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
              <div className="p-3 bg-white rounded-full shadow-sm text-secondary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Secure Payment</h3>
                <p className="text-sm text-gray-500">100% Secure Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Favorites</h2>
              <p className="text-gray-500">Our most loved items this month</p>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/catalog" className="inline-block px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Shop by Category</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/catalog?category=baby-boy" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800" 
                alt="Baby Boy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white mb-2">Baby Boy</h3>
                <span className="inline-flex items-center text-white/90 group-hover:text-white font-medium">
                  Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
            <Link to="/catalog?category=baby-girl" className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1515488042361-ee00651a6a37?auto=format&fit=crop&q=80&w=800" 
                alt="Baby Girl" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white mb-2">Baby Girl</h3>
                <span className="inline-flex items-center text-white/90 group-hover:text-white font-medium">
                  Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};