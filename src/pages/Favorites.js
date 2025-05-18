import React from 'react';
import { FaHeart, FaGlobe } from 'react-icons/fa';
import CountryCard from '../components/CountryCard';

const Favorites = ({ user, favorites, addFavorite, removeFavorite, isFavorite }) => {
  return (
    <div className="fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-100 mb-2 flex items-center justify-center">
          <FaGlobe className="text-primary mr-2" />
          <span>The Atlas: Favorites</span>
        </h1>
        <p className="text-gray-500">"Your saved destinations from around the globe."</p>
      </div>

      {favorites.length === 0 ? (
        <div className="p-6 border border-gray-700 bg-gray-800 rounded-lg text-center">
          <h3 className="text-xl text-gray-100 mb-2">No Favorites Yet</h3>
          <p className="text-gray-400">Add countries to your favorites to see them here.</p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-gray-200">
            <p>You have {favorites.length} favorite {favorites.length === 1 ? 'country' : 'countries'}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((country) => (
              <CountryCard
                key={country.cca3}
                country={country}
                user={user}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isFavorite={isFavorite}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;