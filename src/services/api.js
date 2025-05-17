import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

// Get all countries
export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

// Search countries by name
export const searchCountriesByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return []; // Return empty array for no matches
    }
    console.error('Error searching countries:', error);
    throw error;
  }
};

// Get countries by region
export const getCountriesByRegion = async (region) => {
  try {
    const response = await axios.get(`${BASE_URL}/region/${region}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries by region:', error);
    throw error;
  }
};

// Get country details by code
export const getCountryByCode = async (code) => {
  try {
    const response = await axios.get(`${BASE_URL}/alpha/${code}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching country details:', error);
    throw error;
  }
};

// Get countries by language
export const getCountriesByLanguage = async (language) => {
  try {
    // First get all countries
    const allCountries = await getAllCountries();
    
    // Filter countries by language
    const filteredCountries = allCountries.filter(country => {
      if (country.languages) {
        // Check if any of the country's languages includes the search term
        return Object.values(country.languages)
          .some(lang => lang.toLowerCase().includes(language.toLowerCase()));
      }
      return false;
    });
    
    return filteredCountries;
  } catch (error) {
    console.error('Error fetching countries by language:', error);
    throw error;
  }
}; 