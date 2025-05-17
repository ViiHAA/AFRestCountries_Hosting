import { useState, useEffect, useCallback } from 'react';
import { 
  getAllCountries, 
  searchCountriesByName
} from '../services/api';

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  // Fetch all countries on initial load
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const data = await getAllCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        setError('Failed to fetch countries. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Apply filters (search term, region, language)
  useEffect(() => {
    const applyFilters = async () => {
      try {
        setLoading(true);
        let result = [];

        // If we have a search term
        if (searchTerm) {
          result = await searchCountriesByName(searchTerm);
        } else {
          result = [...countries];
        }

        // If we have a region filter
        if (regionFilter && result.length > 0) {
          result = result.filter(country => 
            country.region.toLowerCase() === regionFilter.toLowerCase()
          );
        }

        // If we have a language filter
        if (languageFilter && result.length > 0) {
          result = result.filter(country => {
            if (country.languages) {
              return Object.values(country.languages)
                .some(lang => lang.toLowerCase().includes(languageFilter.toLowerCase()));
            }
            return false;
          });
        }

        setFilteredCountries(result);
      } catch (err) {
        setError('Error applying filters. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Only apply filters if we have countries loaded
    if (countries.length > 0) {
      applyFilters();
    }
  }, [searchTerm, regionFilter, languageFilter, countries]);

  // Search function
  const searchCountries = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Filter by region
  const filterByRegion = useCallback((region) => {
    setRegionFilter(region);
  }, []);

  // Filter by language
  const filterByLanguage = useCallback((language) => {
    setLanguageFilter(language);
  }, []);

  // Reset all filters
  const resetFilters = useCallback(() => {
    setSearchTerm('');
    setRegionFilter('');
    setLanguageFilter('');
  }, []);

  return {
    countries: filteredCountries,
    loading,
    error,
    searchTerm,
    regionFilter,
    languageFilter,
    searchCountries,
    filterByRegion,
    filterByLanguage,
    resetFilters
  };
};

export default useCountries; 