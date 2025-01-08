import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  min-height: 75px;
  gap: 10px;
`;
const ContainerLogo = styled.div`
  height: 70px;
  width: 190px;
  img {
    width: 100%;
  }
`;
const ThemeToggle = styled.button`
  cursor: pointer;
  margin: 20px;
  height: 30px;
  background-color: orange;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
`;

export { ContainerLogo , Nav , ThemeToggle}