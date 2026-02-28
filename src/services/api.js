import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

// Default fields to request - keeps payloads small and avoids the "must specify fields" error
const DEFAULT_FIELDS = 'name,flags,capital,region,subregion,population,languages,currencies,cca2,cca3';

// Get all countries (fields are now REQUIRED by the API)
export const getAllCountries = async (fields = DEFAULT_FIELDS) => {
  try {
    const response = await axios.get(`${BASE_URL}/all?fields=${fields}`);
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
      return [];
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

// Get countries by language — now uses the dedicated /lang endpoint
// Pass a language name (e.g. "Spanish") or ISO 639-1 code (e.g. "es")
export const getCountriesByLanguage = async (language) => {
  try {
    const response = await axios.get(`${BASE_URL}/lang/${language}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    console.error('Error fetching countries by language:', error);
    throw error;
  }
};