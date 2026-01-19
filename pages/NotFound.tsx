import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-bold text-brand-200">404</h1>
        <h2 className="text-2xl font-bold text-gray-900">Oops! Page not found</h2>
        <p className="text-gray-500">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-md"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link 
            to="/catalog" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-brand-600 border border-brand-200 rounded-lg hover:bg-brand-50 transition-colors shadow-sm"
          >
            <Search className="h-5 w-5" />
            Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;