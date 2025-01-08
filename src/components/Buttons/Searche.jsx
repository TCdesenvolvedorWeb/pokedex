import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar, SearchPokemon } from "../../styles/StyledSearch";

const Search = () => {
  const [name, setName] = useState();
  const navigate = useNavigate();

  const handleSearch = async () => {
    navigate(`/Details/?query=${encodeURIComponent(name)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBar>
      <SearchPokemon
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar..."
      />
      <button onClick={handleSearch}>🔎</button>
    </SearchBar>
  );
};

export { Search };
