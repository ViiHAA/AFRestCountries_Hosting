import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ onSearch, searchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || '');

  // Trigger search automatically when typing (with debounce)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (localSearchTerm.trim() !== '') {
        onSearch(localSearchTerm); // Pass the current input to parent
      } else {
        onSearch(''); // Clear results if empty
      }
    }, 300); // Adjust debounce delay (ms)

    return () => clearTimeout(delayDebounce);
  }, [localSearchTerm, onSearch]);

  const handleClear = () => {
    setLocalSearchTerm('');
    onSearch(''); // Clear results
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a country..."
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          className="input-field w-full"
        />
        {localSearchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaSearch /> {/* Icon is now decorative (no click handler) */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;