import React from 'react';
import { FaGlobe, FaFilter, FaSyncAlt } from 'react-icons/fa';
import useCountries from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import LanguageFilter from '../components/LanguageFilter';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const {
    countries,
    loading,
    error,
    searchTerm,
    regionFilter,
    languageFilter,
    searchCountries,
    filterByRegion,
    filterByLanguage,
    resetFilters
  } = useCountries();

  return (
    <div className="fade-in">
      {/* Header section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-300 mb-2 flex items-center justify-center">
          <FaGlobe className="text-primary mr-2" />
          <span>The Atlas</span>
        </h1>
        <p className="text-gray-500">"Your Pocket Passport to Planet Earth."</p>
      </div>
      
      {/* Filters section */}
      <div className="mb-8 bg-white border border-gray-600 p-4 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <FaFilter className="text-primary mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Filter Countries</h2>
          <button 
            onClick={resetFilters} 
            className="ml-auto flex items-center text-gray-600 hover:text-primary transition-colors"
            aria-label="Reset all filters"
          >
            <FaSyncAlt className="mr-1" /> Reset Filters
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search-input" className="block text-gray-700 mb-2">Search</label>
            <SearchBar onSearch={searchCountries} searchTerm={searchTerm} />
          </div>
          <div>
            <label htmlFor="region-filter" className="block text-gray-700 mb-2">Region</label>
            <RegionFilter selectedRegion={regionFilter} onRegionChange={filterByRegion} />
          </div>
          <div>
            <label htmlFor="language-filter" className="block text-gray-700 mb-2">Language</label>
            <LanguageFilter selectedLanguage={languageFilter} onLanguageChange={filterByLanguage} />
          </div>
        </div>
      </div>
      
      {/* Results section */}
      <div>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="p-6 border border-red-200 bg-red-50 rounded-lg text-center">
            <p className="text-red-500 text-xl mb-4">{error}</p>
            <button 
              onClick={resetFilters} 
              className="btn-primary"
              aria-label="Try again"
            >
              <FaSyncAlt className="inline mr-1" /> Try Again
            </button>
          </div>
        ) : countries.length === 0 ? (
          <div className="p-6 border border-blue-200 bg-blue-50 rounded-lg text-center">
            <h3 className="text-xl text-gray-800 mb-2">No Countries Found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
            <button 
              onClick={resetFilters} 
              className="btn-primary"
              aria-label="Reset filters"
            >
              <FaSyncAlt className="inline mr-1" /> Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 text-gray-700">
              <p>Found {countries.length} countries</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {countries.map((country) => (
                <CountryCard key={country.cca3 || country.alpha3Code} country={country} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home; 