import styled from "styled-components";

const SearchBar = styled.div`
    position: relative;
    display: flex;

    button {
        position: absolute;
        right: 5px;
        top: 5px;
        background-color: transparent;
        border: none;
        border-radius: 10px;
    }
`
const SearchPokemon = styled.input`
  width: 210px;
  height: 30px;
  border-radius: 20px;
  padding: 0 20px;
`;

export { SearchBar , SearchPokemon}