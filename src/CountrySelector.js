import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountrySelector({ onSelect }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.countryInfo.iso2} value={country.countryInfo.iso2}>
            {country.country}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <button onClick={() => onSelect(selectedCountry)}>Show Cases</button>
      )}
    </div>
  );
}

export default CountrySelector;
