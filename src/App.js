import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountrySelector from './CountrySelector';

function App() {
  const [countryCode, setCountryCode] = useState('');
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countryCode) {
      setLoading(true);
      axios.get(`https://disease.sh/v3/covid-19/countries/${countryCode}`)
        .then(response => {
          setCountryData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching COVID-19 data:', error);
          setLoading(false);
        });
    }
  }, [countryCode]);

  const handleCountrySelect = (selectedCountryCode) => {
    setCountryCode(selectedCountryCode);
  };

  return (
    <div className="App">
      <h1>COVID-19 Cases Tracker</h1>
      <CountrySelector onSelect={handleCountrySelect} />
      {loading && <p>Loading...</p>}
      {countryData && Object.keys(countryData).length > 0 && (
        <div>
          <h2>{countryData.country}</h2>
          <p>Cases: {countryData.cases}</p>
          <p>Deaths: {countryData.deaths}</p>
          <p>Recovered: {countryData.recovered}</p>
        </div>
      )}
    </div>
  );
}

export default App;
