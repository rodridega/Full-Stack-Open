import React, { useEffect, useState } from "react";
import axios from "axios";

export const App2 = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const getCountries = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes((search || "").toLowerCase())

      )
    );
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <div>
        Buscar Pais: <input value={search} onChange={handleSearch} />
      </div>
      <div>
        {countries.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))}
      </div>
    </div>
  );
};
