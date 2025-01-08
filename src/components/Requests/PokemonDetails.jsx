import { useSearchParams } from "react-router-dom";
import { Pokemon } from "../variables";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GetName } from "../../context/GetName";
import { RenderDetails } from "../Render/renderDetails";

const PokemonDetails = (props) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [details, setDetails] = useState([]);
  const { name } = useContext(GetName);
  const [abilitiesNames, setAbilitiesNames] = useState();
  const [moves, setMoves] = useState();
  const [erro, setErro] = useState(null);

  const handlePokemonData = async () => {
    try {
      setErro(null);

      const response = await axios.get(`${Pokemon}/${query ? query : name}`);
      return await response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error("Não foi possível realizar a requisição da url. Erro: " + e.message)
        setErro(e.message);
      }
    }
  };

  const fetchUrl = async (url) => {
    try {
      setErro(null);

      const response = axios.get(url);
      return response;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error("Não foi possível realizar a requisição da url. Erro: " + e.message)
        setErro(
          "Não foi possível realizar a requisição da url. Erro: " + e.message
        );
      }
    }
  };

  useEffect(() => {
    const handleDetails = async () => {
      try {
        setErro(null);
        const data = await handlePokemonData();
        setDetails(data);

        const abilitiesProomises = await axios.all(
          data.abilities.map(async (e) => await fetchUrl(e.ability.url))
        );
        setAbilitiesNames(abilitiesProomises);

        const movesPromises = await axios.all(
          data.moves.map(async (e) => await fetchUrl(e.move.url))
        );
        setMoves(movesPromises);
        
      } catch (e) {
        if (axios.isAxiosError(e)) {
          console.error("Não foi possível realizar a requisição da url. Erro: " + e.message)
          setErro("Não foi possível realizar a requisição. Erro: " + e.message);
        }
      }
    };
    handleDetails();
  }, []);

  return <RenderDetails details={ details } abilitiesNames={abilitiesNames} moves={moves} erro={erro}/>
};

export { PokemonDetails };
