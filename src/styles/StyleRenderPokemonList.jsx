import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 20px;
  border: solid 1px orange;
  border-radius: 10px;
  cursor: pointer;
  background-size: cover;
  transition: 0.3s ease-in-out;

  &:hover {
    flex-grow: 1;
    background-color: black;
    color: white;
  }
`;

const Pokemon = styled.img`
  width: 150px;
  color: white;
`;

const Nome = styled.h2`
  text-align: center;
  color: rgb(190, 190, 190);
  text-shadow: 1px 2px 10px gray;
`;

export { Cards , Nome , Pokemon}