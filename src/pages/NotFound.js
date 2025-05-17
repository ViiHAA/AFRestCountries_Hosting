import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center fade-in">
      <div className="mb-8 text-red-500">
        <FaExclamationTriangle className="text-7xl mx-auto" />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      
      <div className="w-full max-w-md border border-gray-200 bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Error:</span> The page you are looking for does not exist.
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Location:</span> {window.location.pathname}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Suggestion:</span> Return to the homepage
        </p>
      </div>
      
      <div className="w-full max-w-md h-1 bg-gray-200 mb-8"></div>
      
      <Link to="/" className="btn-primary flex items-center">
        <FaHome className="mr-2" /> Return to Home
      </Link>
    </div>
  );
};

export default NotFound; 