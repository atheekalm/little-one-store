import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Check, Truck, ArrowLeft, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { SEO } from '../components/SEO';
import { useWishlist } from '../hooks/useWishlist';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { wishlist, toggleWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <Link to="/catalog" className="text-primary hover:underline">Return to Catalog</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);
  const sizes = product.ageGroup === '0-1' ? ['0-3m', '3-6m', '6-9m', '9-12m'] 
              : product.ageGroup === '1-2' ? ['12-18m', '18-24m'] 
              : ['2T', '3T'];

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Little One"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <>
      <SEO 
        title={product.name} 
        description={product.description}
        image={product.image}
        type="product"
        jsonLd={jsonLd}
      />

      <div className="bg-white min-h-screen pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/catalog" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Catalog
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-gray-50 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                    <img 
                      src={product.image} 
                      alt={`View ${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                 <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">
                   {product.category.replace('-', ' ')}
                 </span>
                 {product.isNew && (
                   <span className="text-xs font-bold text-accent bg-yellow-50 px-2 py-1 rounded border border-yellow-100">
                     New Arrival
                   </span>
                 )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <span className="ml-2 text-sm text-gray-500">(24 reviews)</span>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <div className="prose prose-sm text-gray-600 mb-8">
                <p>{product.description}</p>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  <h3 className="font-medium text-gray-900">Select Size</h3>
                  <button className="text-sm text-primary hover:underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg border text-sm font-medium transition-all
                        ${selectedSize === size 
                          ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary' 
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-10">
                <WhatsAppButton product={product} variant="primary" className="flex-1 justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" />
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className={`px-6 rounded-xl border-2 font-medium transition-colors flex items-center justify-center
                    ${isWishlisted 
                      ? 'border-red-100 bg-red-50 text-red-500' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  aria-label="Wishlist"
                >
                  <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Feature List */}
              <div className="border-t border-gray-100 pt-8 space-y-4">
                <h3 className="font-semibold text-gray-900">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="mr-3 p-1 rounded-full bg-green-100 text-green-600">
                        <Check size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <Truck size={18} className="text-gray-400" />
                <span>Free shipping on orders over $50. Free returns within 30 days.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};