import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByCode } from '../services/api';
import { 
  FaArrowLeft, FaGlobeAmericas, FaUsers, FaCity, 
  FaLanguage, FaCoins, FaGlobe, FaPhoneAlt, FaHeart
} from 'react-icons/fa';
import LoadingSpinner from '../components/LoadingSpinner';

const CountryDetails = ({ user, addFavorite, removeFavorite, isFavorite }) => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        setLoading(true);
        const data = await getCountryByCode(countryId);
        setCountry(data);
      } catch (err) {
        setError('Failed to fetch country details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (countryId) {
      fetchCountryDetails();
    }
  }, [countryId]);

  // Format numbers with commas
  const formatNumber = (num) => {
    return num ? num.toLocaleString() : 'Unknown';
  };

  // Extract language names as an array
  const getLanguages = (languages) => {
    return languages ? Object.values(languages) : ['Unknown'];
  };

  // Get currency information
  const getCurrencies = (currencies) => {
    if (!currencies) return ['Unknown'];
    return Object.values(currencies).map(
      (currency) => `${currency.name} (${currency.symbol || ''})`
    );
  };

  // Get border countries
  const getBorders = (borders) => {
    return borders || [];
  };

  // Handle favorite toggle
  const handleFavoriteToggle = () => {
    if (!user) {
      alert('Please log in to add favorites.');
      return;
    }
    if (isFavorite(countryId)) {
      removeFavorite(countryId);
    } else {
      addFavorite(country);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="p-6 border border-red-200 bg-red-50 rounded-lg text-center">
        <p className="text-red-500 text-xl mb-4">{error}</p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Countries
        </Link>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="p-6 border border-blue-200 bg-blue-50 rounded-lg text-center">
        <h2 className="text-2xl text-gray-800 mb-4">Country Not Found</h2>
        <p className="text-gray-600 mb-6">
          The country you are looking for could not be found.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Countries
        </Link>
      </div>
    );
  }

  // Extract country data safely
  const name = country?.name?.common || 'Unknown';
  const nativeName = country?.name?.nativeName 
    ? Object.values(country.name.nativeName)[0]?.common 
    : 'Unknown';
  const population = formatNumber(country.population);
  const region = country?.region || 'Unknown';
  const subregion = country?.subregion || 'Unknown';
  const capital = country?.capital?.[0] || 'Unknown';
  const topLevelDomain = country?.tld?.[0] || 'Unknown';
  const currencies = getCurrencies(country.currencies);
  const languages = getLanguages(country.languages);
  const flag = country?.flags?.svg || country?.flags?.png || '';
  const borders = getBorders(country.borders);
  const area = formatNumber(country?.area);
  const callingCode = country?.idd?.root 
    ? `${country.idd.root}${country.idd.suffixes?.[0] || ''}` 
    : 'Unknown';

  return (
    <div className="py-6 fade-in">
      <div className="mb-6 flex justify-between items-center">
        <Link to="/" className="btn-primary inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Countries
        </Link>
        {user && (
          <button
            onClick={handleFavoriteToggle}
            className={`btn-secondary inline-flex items-center ${
              isFavorite(countryId) ? 'text-primary' : 'text-gray-400'
            } hover:text-accent`}
            aria-label={isFavorite(countryId) ? 'Remove from favorites' : 'Add to favorites'}
          >
            <FaHeart className="mr-2" />
            {isFavorite(countryId) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        )}
      </div>

      <div className="card bg-gray-800 border border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Flag Section */}
          <div className="border border-gray-700 rounded overflow-hidden shadow-sm">
            {flag ? (
              <img
                src={flag}
                alt={`Flag of ${name}`}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="bg-gray-700 h-64 flex items-center justify-center">
                <span className="text-gray-400">No Flag Available</span>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
              {name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              <div className="space-y-3">
                <p className="flex items-center text-gray-200">
                  <span className="font-medium mr-2">Native Name:</span>{" "}
                  <span>{nativeName}</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <FaUsers className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Population:</span>{" "}
                  <span>{population}</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <FaGlobeAmericas className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Region:</span>{" "}
                  <span>{region}</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <span className="font-medium mr-2">Sub Region:</span>{" "}
                  <span>{subregion}</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <FaCity className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Capital:</span>{" "}
                  <span>{capital}</span>
                </p>
              </div>

              <div className="space-y-3">
                <p className="flex items-center text-gray-200">
                  <FaGlobe className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Top Level Domain:</span>{" "}
                  <span>{topLevelDomain}</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <FaCoins className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Currencies:</span>{" "}
                  <span>{currencies.join(', ')}</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <FaLanguage className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Languages:</span>{" "}
                  <span>{languages.join(', ')}</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <span className="font-medium mr-2">Area:</span>{" "}
                  <span>{area} km²</span>
                </p>
                <p className="flex items-center text-gray-200">
                  <FaPhoneAlt className="mr-2 text-primary" />
                  <span className="font-medium mr-2">Calling Code:</span>{" "}
                  <span>{callingCode}</span>
                </p>
              </div>
            </div>

            {/* Border Countries */}
            {borders.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Border Countries:</h3>
                <div className="flex flex-wrap gap-2">
                  {borders.map((border) => (
                    <Link
                      key={border}
                      to={`/country/${border}`}
                      className="px-4 py-2 bg-gray-700 border border-gray-600 text-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 rounded"
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;