import CountryCard from '@/components/CountryCard';
import { render, screen } from '@testing-library/react';

const mockCountry = {
  name: { common: 'Test Country' },
  population: 1000000,
  region: 'Test Region',
  capital: ['Test Capital'],
  flags: { png: 'test-flag.png' },
  languages: { eng: 'English' },
  cca3: 'TST'
};

describe('CountryCard Component', () => {
  it('renders country information correctly', () => {
    render(<CountryCard country={mockCountry} />);
    
    expect(screen.getByText('Test Country')).toBeInTheDocument();
    expect(screen.getByText('1,000,000')).toBeInTheDocument();
    expect(screen.getByText('Test Region')).toBeInTheDocument();
    expect(screen.getByText('Test Capital')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByAltText('Flag of Test Country')).toHaveAttribute('src', 'test-flag.png');
  });
});