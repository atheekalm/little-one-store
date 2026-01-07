import { useState, useEffect } from 'react';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('little-one-wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse wishlist', e);
      }
    }
  }, []);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const newWishlist = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      
      localStorage.setItem('little-one-wishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  return { wishlist, toggleWishlist };
};
