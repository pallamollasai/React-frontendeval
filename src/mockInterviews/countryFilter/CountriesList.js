import React, { useState } from "react";
import useFetch from "./useFetch";
import Country from "./Country";
import CountryFilter from "./CountryFilter";

const URL = "https://restcountries.com/v3.1/all";

export default function CountriesList() {
  const [data, loading, error] = useFetch(URL);
  const [filteredCountries, SetFilteredCountries] = useState([]);

  // console.log("data inside is ", data);
  const updateFilteredCountries = (countries) => {
    SetFilteredCountries(countries);
  };

  return (
    <>
      <h2>Countries List</h2>
      <CountryFilter
        countries={data}
        updateFilteredCountries={updateFilteredCountries}
      />
      <ul>
        {filteredCountries.map((country, index) => (
          <>
            <li key={index}>
              <Country
                countryName={country?.name?.official}
                capitals={country.capital}
                key={index}
              />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
