import React, { useState, useEffect } from 'react';

function App() {
  const [country, setCountry] = useState('India');
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCovidData(country);
  }, [country]);

  const fetchCovidData = async (country) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchCovidData(country);
  };

  return (
    <div className="App">
      <h1>COVID-19 Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{data.country}</h2>
          <p>Cases: {data.cases}</p>
          <p>Deaths: {data.deaths}</p>
          <p>Recovered: {data.recovered}</p>
        </div>
      )}
    </div>
  );
}

export default App;
