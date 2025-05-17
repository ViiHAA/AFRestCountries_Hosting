import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
//import { SiFreelancermap } from "react-icons/si";
const REGIONS = [
  { value: '', label: 'All Regions' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Middle East', label: 'Middle East' },
  { value: 'Polar Regions', label: 'Polar Regions' },
  { value: 'Southeast Asia', label: 'Southeast Asia' },
  { value: 'Central Asia', label: 'Central Asia' },
  { value: 'South Asia', label: 'South Asia' },
  { value: 'East Asia', label: 'East Asia' },
  { value: 'Western Asia', label: 'Western Asia' },
  { value: 'Northern Europe', label: 'Northern Europe' },
  { value: 'Southern Europe', label: 'Southern Europe' },
  { value: 'Western Europe', label: 'Western Europe' },
  { value: 'Eastern Europe', label: 'Eastern Europe' }
];

const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <FaGlobeAmericas className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <select
          value={selectedRegion}
          onChange={(e) => onRegionChange(e.target.value)}
          className="input-field w-full pl-10 appearance-none cursor-pointer"
          aria-label="Filter by region"
        >
          {REGIONS.map((region) => (
            <option key={region.value} value={region.value}>
              {region.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RegionFilter; 