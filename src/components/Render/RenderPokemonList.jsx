import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeToggleContext } from "../../context/ThemeToggle";
import { GetName } from "../../context/GetName";
import { Cards , Nome , Pokemon } from "../../assets/styles/StyleRenderPokemonList";

const PokeList = (props) => {
  const { setName } = useContext(GetName);
  const { theme } = useContext(ThemeToggleContext)

  return (
    <>
      {props.data.map((pokemon) => {              
        return (
          <Cards style={{color: theme.color , backgroundImage: theme.background }} key={pokemon.name}>
            <Link to={`/Details/`} onClick={() => setName(pokemon.name)}>
              <div>
                <Pokemon
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <Nome style={{color: theme.color , fontWeight: theme.fontWeight }}> {pokemon.name} </Nome>
              </div>
            </Link>
          </Cards>
        );
      })}
    </>
  );
};

export { PokeList };
