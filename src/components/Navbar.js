import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaHeart, FaMoon, FaSun } from 'react-icons/fa';
//import { FaMapMarkerAlt } from 'react-icons/fa';
//import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { SiFreelancermap } from "react-icons/si";
const Navbar = ({ isLoggedIn, user, onLogout, darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-sm py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link 
            to="/" 
            className="text-primary text-2xl font-bold flex items-center"
          >
            <SiFreelancermap className="text-primary mr-2" />
            <span>The Atlas</span>
          </Link>
        </div>
        
        <div className="flex space-x-4 items-center">
          {isLoggedIn && (
            <Link 
              to="/favorites" 
              className="text-gray-300 hover:text-primary transition-colors"
            >
              <FaHeart className="inline mr-1" /> Favorites
            </Link>
          )}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-gray-300" />
            )}
          </button>
          
          {isLoggedIn ? (
            <>
              <div className="text-gray-300 bg-gray-700 px-3 py-1 rounded-md">
                <span className="mr-2">
                  <FaUser className="inline mr-1" />
                  {user?.name || 'User'}
                </span>
              </div>
              <button 
                onClick={onLogout} 
                className="btn-primary"
              >
                <FaSignOutAlt className="inline mr-1" /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-primary">
              <FaUser className="inline mr-1" /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;