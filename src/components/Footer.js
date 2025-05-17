import React from 'react';
import { FaGithub, FaCode } from 'react-icons/fa';
import { GiWorld } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-600 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center text-primary font-semibold">
              <GiWorld className="text-primary mr-2" />
              <span className="text-xl">The Atlas</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Providing the Smarter Way to Travel the Globe.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/ViiHAA" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="mailto: vwahundeniya@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <SiGmail size={24} />
            </a>
            <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <FaCode size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400 text-sm border-t border-gray-200 pt-4">
          <p>
            Built with <span className="text-red-500">♥</span> and 
            <span className="text-primary"> React</span> | 
            Data provided by <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">REST Countries API</a>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Discover World | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 