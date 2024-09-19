import React, { useEffect, useState } from "react";
const countries = [
  { name: "Select a country", cities: [] },
  { name: "India", cities: ["Hyderabad", "Delhi", "Bangalore"] },
  { name: "USA", cities: ["Texas", "Washington", "Oklahoma"] },
  { name: "UK", cities: ["Barmihmgam", "London", "Wales"] }
];
export default function CountryStateDropDown() {
  const [country, setCountry] = useState({});
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const { value } = e.target;
    const countrySelected = countries.filter(
      (country) => country.name == value
    );
    setCountry({ ...countrySelected });
    setCities([...countrySelected[0].cities]);
  };

  const handleCityChange = (e) => {
    console.log("city is ", e.target.value);
  };

  return (
    <>
      <select value={country.name} onChange={handleCountryChange}>
        {countries.map((country, index) => (
          <>
            <option value={country.name} key={index}>
              {country.name}
            </option>
          </>
        ))}
      </select>

      <select value={cities ? cities[0] : ""} onChange={handleCityChange}>
        {cities.map((city, index) => (
          <>
            <option value={city} key={index}>
              {city}
            </option>
          </>
        ))}
      </select>
    </>
  );
}
