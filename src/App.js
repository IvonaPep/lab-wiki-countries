import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, NavLink } from 'react-router-dom';
import countries from './countries.json';
import { useState } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countriesArr, setCountriesArr] = useState(countries);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {countriesArr.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <CountriesList country={country} />
            <CountryDetails country={country} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
