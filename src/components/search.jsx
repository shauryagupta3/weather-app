import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { APIurl, geoAPIOptions } from "./api";
import "../../src/components/style/search.css";

const Search = ({ onSearchChange }) => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
  const [search, setSearch] = useState(null);
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = async (inputValue) => {
    return fetch(
      `${APIurl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoAPIOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      })
      .catch((err) => console.log(err));
  };
  return (
    <AsyncPaginate
      className="search-bar"
      placeholder="Search for a city"
      debounceTimeout={1000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={mystyle}
    />
  );
};

export default Search;
