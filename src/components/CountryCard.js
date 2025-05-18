import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaGlobeAmericas, FaCity, FaLanguage, FaHeart } from 'react-icons/fa';

const CountryCard = ({ country, user, addFavorite, removeFavorite, isFavorite }) => {
  const name = country?.name?.common || 'Unknown';
  const population = country?.population ? country.population.toLocaleString() : 'Unknown';
  const region = country?.region || 'Unknown Region';
  const capital = country?.capital?.[0] || 'Unknown';
  const flag = country?.flags?.svg || country?.flags?.png || '';
  const languages = country?.languages 
    ? Object.values(country.languages).join(', ') 
    : 'Unknown';
  const countryCode = country?.cca3 || country?.alpha3Code || '';

  // Handle favorite toggle
  const handleFavoriteToggle = () => {
    if (!user) {
      alert('Please log in to add favorites.');
      return;
    }
    if (isFavorite(countryCode)) {
      removeFavorite(countryCode);
    } else {
      addFavorite(country);
    }
  };

  return (
    <div className="card h-full bg-gray-800 border border-gray-700">
      <div className="relative h-40 mb-4 overflow-hidden rounded">
        {flag ? (
          <img 
            src={flag} 
            alt={`Flag of ${name}`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">No Flag Available</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-1 px-2">
          <h3 className="text-lg font-semibold text-white truncate">{name}</h3>
        </div>
        {user && (
          <button
            onClick={handleFavoriteToggle}
            className={`absolute top-2 right-2 p-2 rounded-full ${
              isFavorite(countryCode) ? 'text-primary' : 'text-gray-400'
            } hover:text-accent transition-colors`}
            aria-label={isFavorite(countryCode) ? 'Remove from favorites' : 'Add to favorites'}
          >
            <FaHeart size={24} />
          </button>
        )}
      </div>
      
      <div className="space-y-2 text-sm">
        <p className="flex items-center text-gray-300">
          <FaGlobeAmericas className="mr-2 text-primary" /> 
          <span className="font-medium">Region:</span> 
          <span className="ml-2">{region}</span>
        </p>
        <p className="flex items-center text-gray-300">
          <FaUsers className="mr-2 text-primary" /> 
          <span className="font-medium">Population:</span> 
          <span className="ml-2">{population}</span>
        </p>
        <p className="flex items-center text-gray-300">
          <FaCity className="mr-2 text-primary" /> 
          <span className="font-medium">Capital:</span> 
          <span className="ml-2">{capital}</span>
        </p>
        <p className="flex items-center text-gray-300">
          <FaLanguage className="mr-2 text-primary" /> 
          <span className="font-medium">Languages:</span> 
          <span className="ml-2 truncate">{languages}</span>
        </p>
      </div>
      
      <div className="mt-4">
        <Link 
          to={`/country/${countryCode}`}
          className="block w-full text-center btn-primary"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;