import { useState, useEffect } from 'react';

const useFavorites = (user) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when user changes
  useEffect(() => {
    if (user) {
      const storedFavorites = localStorage.getItem(`favorites_${user.id}`);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      } else {
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  }, [user]);

  // Add a country to favorites
  const addFavorite = (country) => {
    if (!user) return; // Only allow favorites if user is logged in
    const newFavorites = [...favorites, country];
    setFavorites(newFavorites);
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(newFavorites));
  };

  // Remove a country from favorites
  const removeFavorite = (countryCode) => {
    if (!user) return;
    const newFavorites = favorites.filter((fav) => fav.cca3 !== countryCode);
    setFavorites(newFavorites);
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(newFavorites));
  };

  // Check if a country is in favorites
  const isFavorite = (countryCode) => {
    return favorites.some((fav) => fav.cca3 === countryCode);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;