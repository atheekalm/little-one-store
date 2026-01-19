import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Truck, Share2, Check } from 'lucide-react';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { PRODUCTS, WHATSAPP_NUMBER, SITE_URL } from '../constants';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === productId);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImage, setActiveImage] = useState<string>('');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Initialize active image
  useEffect(() => {
    if (product) setActiveImage(product.image);
  }, [product]);

  // Mock additional images for the gallery
  const images = useMemo(() => {
    if (!product) return [];
    return [
      product.image,
      `https://picsum.photos/800/1000?random=${product.id}2`,
      `https://picsum.photos/800/1000?random=${product.id}3`,
      `https://picsum.photos/800/1000?random=${product.id}4`,
    ];
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
        <button onClick={() => navigate('/catalog')} className="mt-4 text-brand-600 hover:underline">
          Return to Catalog
        </button>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const sizes = ['0-6m', '6-12m', '12-18m', '18-24m'];

  // SEO Structured Data (Product + Breadcrumbs)
  const structuredData = {
    "@context": "https://schema.org/",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Catalog",
            "item": `${SITE_URL}/#/catalog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.category.replace('-', ' '),
            "item": `${SITE_URL}/#/catalog/${product.category}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": product.name
          }
        ]
      },
      {
        "@type": "Product",
        "name": product.name,
        "image": images,
        "description": product.description,
        "brand": { "@type": "Brand", "name": "Little One Store" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": product.price,
          "availability": "https://schema.org/InStock",
          "url": `${SITE_URL}/#/product/${product.id}`
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen pb-24 lg:pb-12">
      <SEO 
        title={product.name} 
        description={product.description}
        image={activeImage}
        type="product"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
        <ol className="flex items-center space-x-2">
          <li><button onClick={() => navigate('/')} className="hover:text-brand-600">Home</button></li>
          <li>/</li>
          <li><button onClick={() => navigate('/catalog')} className="hover:text-brand-600">Catalog</button></li>
          <li>/</li>
          <li><button onClick={() => navigate(`/catalog/${product.category}`)} className="capitalize hover:text-brand-600">{product.category.replace('-', ' ')}</button></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          
          {/* Gallery Section */}
          <div className="product-gallery flex flex-col-reverse lg:flex-row gap-4 select-none">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] hide-scrollbar pb-2 lg:pb-0 px-1 lg:px-0">
               {images.map((img, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setActiveImage(img)}
                   className={`relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${activeImage === img ? 'border-brand-600 ring-2 ring-brand-100' : 'border-transparent hover:border-gray-200'}`}
                 >
                   <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                 </button>
               ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm group">
               <img 
                 src={activeImage} 
                 alt={product.name} 
                 className="w-full h-full object-cover object-center transition-transform duration-500 lg:group-hover:scale-105"
               />
               {product.isNew && (
                 <span className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                   NEW ARRIVAL
                 </span>
               )}
               <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-brand-600 transition-all shadow-sm hover:shadow-md z-10">
                 <Share2 className="h-5 w-5" />
               </button>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="mt-8 lg:mt-0 lg:py-4">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">{product.name}</h1>
            
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                  {/* Mock discounted price for demo */}
                  <p className="text-lg text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</p>
                </div>
                <p className="text-sm text-green-600 font-medium mt-1">In Stock • Ready to Ship</p>
              </div>
              
              <div className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                 <div className="flex text-yellow-400 text-sm">
                   {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                 </div>
                 <span className="text-xs text-gray-600 font-medium ml-2 border-l border-gray-300 pl-2">128 Reviews</span>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Select Size</h3>
                <button className="text-sm text-brand-600 hover:underline">Size Guide</button>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        relative w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 border
                        ${isSelected 
                          ? 'bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-200' 
                          : 'bg-white text-gray-900 border-gray-200 hover:border-brand-400 hover:bg-brand-50'}
                      `}
                    >
                      {size}
                      {isSelected && <div className="absolute -top-2 -right-2 bg-yellow-400 text-brand-900 rounded-full p-0.5 border-2 border-white"><Check className="h-3 w-3" /></div>}
                    </button>
                  );
                })}
              </div>
              {!selectedSize && (
                <div className="mt-3 flex items-center gap-2 text-amber-600 text-sm bg-amber-50 p-2 rounded-md">
                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                   Please select a size to order
                </div>
              )}
            </div>

            <div className="mt-8">
               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Description</h3>
               <div className={`prose prose-sm text-gray-600 leading-relaxed transition-all duration-300 ${!isDescriptionExpanded ? 'line-clamp-3' : ''}`}>
                 <p>{product.description} Crafted with the utmost care, this piece features soft, breathable fabric that ensures your little one stays comfortable whether they're napping or playing. The durable stitching withstands multiple washes, maintaining its shape and color.</p>
                 <ul className="list-disc pl-4 mt-2 space-y-1">
                   <li>100% Organic Cotton</li>
                   <li>Machine washable at 30°C</li>
                   <li>Hypoallergenic materials</li>
                   <li>Easy-snap buttons for quick changes</li>
                 </ul>
               </div>
               <button 
                 onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                 className="mt-3 text-brand-600 text-sm font-bold hover:text-brand-700 inline-flex items-center gap-1"
               >
                 {isDescriptionExpanded ? 'Show Less' : 'Read More Details'}
               </button>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:block mt-10">
               <WhatsAppButton 
                 phoneNumber={WHATSAPP_NUMBER}
                 productName={product.name}
                 price={product.price}
                 productImage={activeImage}
                 size={selectedSize}
                 className={`w-full py-4 text-lg rounded-xl shadow-xl shadow-brand-100 transform transition-all duration-200 ${!selectedSize ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:-translate-y-1 hover:shadow-2xl'}`}
               />
               <p className="text-center text-xs text-gray-400 mt-3">
                 Clicking order will open WhatsApp with your product details pre-filled.
               </p>
            </div>
            
             {/* Trust Badges */}
             <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="p-2 bg-white rounded-full shadow-sm">
                     <Truck className="h-5 w-5 text-brand-600" />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-gray-900">Free Shipping</p>
                      <p className="text-xs text-gray-500">Orders over $50</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div className="p-2 bg-white rounded-full shadow-sm">
                     <ShieldCheck className="h-5 w-5 text-brand-600" />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-gray-900">Secure Payment</p>
                      <p className="text-xs text-gray-500">100% Protected</p>
                   </div>
                </div>
             </div>

          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16 lg:mt-24 border-t border-gray-100 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
            <button onClick={() => navigate('/catalog')} className="text-brand-600 font-medium hover:text-brand-700 hidden sm:block">View All</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {relatedProducts.map(p => (
              <div 
                 key={p.id} 
                 onClick={() => {
                    navigate(`/product/${p.id}`);
                    window.scrollTo(0,0);
                 }}
                 className="cursor-pointer group"
              >
                 <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden mb-3 relative">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {p.isNew && <span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-brand-700 text-[10px] font-bold px-2 py-1 rounded">NEW</span>}
                 </div>
                 <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{p.name}</h3>
                 <p className="text-sm font-bold text-gray-900 mt-1">${p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 lg:hidden z-50 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div className="flex gap-4 items-center max-w-7xl mx-auto">
           <div className="flex-shrink-0">
             <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Total</p>
             <p className="text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
           </div>
           <WhatsAppButton 
             phoneNumber={WHATSAPP_NUMBER}
             productName={product.name}
             price={product.price}
             productImage={activeImage}
             size={selectedSize}
             className={`w-full py-3.5 text-base font-bold rounded-xl shadow-lg ${!selectedSize ? 'opacity-50 pointer-events-none bg-gray-400' : ''}`}
           />
        </div>
        {!selectedSize && (
          <p className="text-center text-[10px] text-red-500 mt-2 font-medium">Please select a size above to order</p>
        )}
      </div>

    </div>
  );
};

export default ProductDetails;