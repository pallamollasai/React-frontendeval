import React, { useState, useRef, useEffect } from "react";

export default function CountryFilter({
  countries = [],
  updateFilteredCountries
}) {
  const [filteredCapitals, setFilteredCapitals] = useState([]);
  const [searchText, setSearchText] = useState("");
  const timerRef = useRef(null);

  const handleFilterInput = (event) => {
    const value = event.target.value;
    setSearchText(value);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      // const filteredCtrs = [];
      const result = [];
      countries.forEach((country) => {
        const capitals = country.capital;
        if (capitals && capitals.length) {
          capitals.forEach((capital) => {
            console.log("search text is ", searchText, capital);
            if (capital.includes(searchText)) {
              console.log("country is ", country);
              result.push(country);
            }
          });
        }
        // return filteredCtrs;
      });
      setFilteredCapitals(result);

      // setFilteredCapitals(() => {

      // });
    }, 800);
  };

  useEffect(() => {
    console.log("filtered countries are ", filteredCapitals);
    updateFilteredCountries(filteredCapitals);
  }, [filteredCapitals]);

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => handleFilterInput(e)}
      />
    </>
  );
}
