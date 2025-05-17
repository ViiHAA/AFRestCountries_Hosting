import React from 'react';
import { FaLanguage } from 'react-icons/fa';

// Common languages to filter by
const LANGUAGES = [
  { value: '', label: 'All Languages' },
  { value: 'english', label: 'English' },
  { value: 'sinhala', label: 'Sinhala' },
  { value: 'french', label: 'French' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'russian', label: 'Russian' },
  { value: 'portuguese', label: 'Portuguese' },
  { value: 'german', label: 'German' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'korean', label: 'Korean' },
  { value: 'italian', label: 'Italian' },
  { value: 'dutch', label: 'Dutch' },
  { value: 'swedish', label: 'Swedish' },
  { value: 'norwegian', label: 'Norwegian' },
  { value: 'danish', label: 'Danish' },
  { value: 'finnish', label: 'Finnish' },
  { value: 'turkish', label: 'Turkish' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'urdu', label: 'Urdu' },
  { value: 'thai', label: 'Thai' },
  { value: 'vietnamese', label: 'Vietnamese' },
  { value: 'indonesian', label: 'Indonesian' },
  { value: 'malay', label: 'Malay' },
  { value: 'filipino', label: 'Filipino' },
  { value: 'swahili', label: 'Swahili' },
  { value: 'hebrew', label: 'Hebrew' },
  { value: 'persian', label: 'Persian' },
  { value: 'ukrainian', label: 'Ukrainian' },
  { value: 'czech', label: 'Czech' },
  { value: 'hungarian', label: 'Hungarian' },
  { value: 'romanian', label: 'Romanian' },
  { value: 'bulgarian', label: 'Bulgarian' },
  { value: 'slovak', label: 'Slovak' },
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