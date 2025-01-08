import styled from "styled-components";

const Father = styled.section`
  height: 100vh;
`

const Cards = styled.section`
  width: 100vw;
  height: 80vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  background-size: 100%;

  @media(min-height: 800px){
    height: 100vh;
  }
  @media(min-height: 1000px){
    height: 81vh;
  }
`;

const Footer = styled.footer`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  bottom: 0;
  background-color: black;

  @media(min-height: 800px) {
    position: relative;
  }
`;

const ShowMore = styled.button`
  cursor: pointer;
  width: 90vw;
  height: 20px;
  background-color: orange;
  text-transform: uppercase;
  font-weight: 700;
`;

export { Cards , Footer , ShowMore , Father }