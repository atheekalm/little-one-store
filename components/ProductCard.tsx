import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category.replace('-', ' ')}</p>
          <p className="text-xs text-gray-500">{product.ageGroup} yrs</p>
        </div>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-brand-600 transition-colors mb-auto">
          {product.name}
        </h3>
        <p className="mt-1 text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;