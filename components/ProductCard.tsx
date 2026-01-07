import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../hooks/useWishlist';
import { WhatsAppButton } from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Badge */}
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-accent text-gray-900 text-xs font-bold px-2 py-1 rounded-full z-10">
          NEW
        </span>
      )}
      {product.originalPrice && (
        <span className="absolute top-3 right-3 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full z-10">
          SALE
        </span>
      )}

      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Quick Action Overlay (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
          <WhatsAppButton 
            product={product} 
            variant="primary" 
            className="w-full text-sm !py-3 justify-center shadow-lg"
            showText={true}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-sm font-semibold text-gray-900 hover:text-primary line-clamp-1">{product.name}</h3>
          </Link>
          <button 
            onClick={() => toggleWishlist(product.id)}
            className={`text-gray-400 hover:text-red-500 transition-colors ${isWishlisted ? 'text-red-500 fill-current' : ''}`}
            aria-label="Add to wishlist"
          >
            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mb-2 capitalize">{product.category.replace('-', ' ')} • {product.ageGroup} yr</p>
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};