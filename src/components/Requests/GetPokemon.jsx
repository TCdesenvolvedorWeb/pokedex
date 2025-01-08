import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PokeList } from "../Render/RenderPokemonList";
import { AllPokemons, Pokemon } from "../variables";
import { Header } from "../Header";
import { Cards, Footer, ShowMore , Father } from "../../styles/StyledGetPokemon";
import { ThemeToggleContext } from "../../context/ThemeToggle";
import { FilterContext } from "../../context/filter";
import { Loading } from "../../styles/styledOfDetails";
import procurando from '../../img/procurando.gif';

const List = () => {
  const [data, setData] = useState({ data: [] });
  const [offset, setOffset] = useState(0);
  const [limit, setlimit] = useState(10);
  const increase = () => setOffset(offset + 10);
  const { theme } = useContext(ThemeToggleContext);
  const { filter } = useContext(FilterContext);
  const [loading, setLoading] = useState(true);

  const moreLimit = () => {
    if (offset >= 0) {
      setlimit(limit + 10);
    }
  };

  const getPokemonsApi = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${Pokemon}?limit=${filter ? AllPokemons : limit}&offSet=${offset}`
      );
      return await response.data.results;
    } catch (e) {
      console.error(
        "Não foi possível realizar a requisição. Erro: " + e.message
      );
    } finally {
      setLoading(false);
    }
  };

  const getPokemonsUrl = async () => {
    try {
      setLoading(true);

      const fetchPokemons = await getPokemonsApi();
      const pokemonsUrl = fetchPokemons.map((i) => i.url);
      return pokemonsUrl;
    } catch (e) {
      console.error(
        "Não foi possível realizar a requisição. Erro: " + e.message
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchUrl = async (url) => {
    try {
      setLoading(true);

      const response = axios.get(url);
      return response;
    } catch (e) {
      console.error(
        "Não foi possível realizar a requisição. Erro: " + e.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);

        const url = await getPokemonsUrl();
        const promises = await axios.all(
          url.map(async (url) => await fetchUrl(url))
        );
        const resolve = promises.map((e) => e.data);

        if (filter) {
          setData({
            data: resolve.filter((e) =>
              e.types.some((types) => types.type.name === filter)
            ),
          });
        } else {
          setData({
            data: resolve,
          });
        }
      } catch (e) {
        console.error("Não foi possivel fazer a requisiçã 😿. Erro: " + e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
    moreLimit();
  }, [offset, filter]);

  return (
    <Father>
      <Header />
      <Cards style={{ color: theme.color, backgroundImage: theme.background }}>
        {loading && (
          <Loading>
            <div>
              <img src={procurando} alt="loading" />
              <p>Loading....</p>
            </div>
          </Loading>
        )}

        <PokeList data={data.data} />
      </Cards>
      <Footer>
        { filter ? '' : <ShowMore onClick={increase}> Show more </ShowMore>}
      </Footer>
    </Father>
  );
};

export { List };