import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <FaMapMarkerAlt className="text-primary text-5xl animate-bounce" />
        <div className="absolute inset-0 rounded-full border-b-4 border-primary opacity-25 animate-spin-slow"></div>
      </div>
      <div className="mt-4 text-gray-400 text-center">
        <div className="text-xl font-semibold">Fetching Country Details</div>
        <div className="flex space-x-1 justify-center mt-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-ping delay-200"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-ping delay-400"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
