import React from "react";

export const Filter = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      Buscar: <input value={search} onChange={handleSearch} />
    </div>
  );
};
