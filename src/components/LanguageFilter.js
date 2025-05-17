import React from 'react';
import { FaLanguage } from 'react-icons/fa';

// Common languages to filter by
const LANGUAGES = [
  { value: '', label: 'All Languages' },
  { value: 'english', label: 'English' },
  { value: 'french', label: 'French' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'russian', label: 'Russian' },
  { value: 'portuguese', label: 'Portuguese' },
  { value: 'german', label: 'German' },
  { value: 'japanese', label: 'Japanese' }
];

const LanguageFilter = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <FaLanguage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="input-field w-full pl-10 appearance-none cursor-pointer"
          aria-label="Filter by language"
        >
          {LANGUAGES.map((language) => (
            <option key={language.value} value={language.value}>
              {language.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageFilter; 