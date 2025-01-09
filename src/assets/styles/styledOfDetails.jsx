import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: black;
  position: relative;
  padding: 10px;
  gap: 10px;
  color: white;
  text-align: center;

  @media(max-width: 475px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const Error = styled.strong`
  font-weight: 400;
  margin: 100px;
  text-transform: uppercase;

  color: orange;

  span{
    color: red;
  }
`

const Loading = styled.figure`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  heigth: 100vh;

  div{
    position: relative;
    width: 200px;
    height: 150px;
  }

  img {
    width: 200px;
    border-radius: 10px;
  }
    
  p{
    color: white;
    position: absolute;
    bottom: 20px;
    left: 36%;
  }
`

const StyledLink = styled(Link)`
  position: absolute;
  left: 0;
  margin: 15px;
  background-color: orange;
  color: black;
  border: solid 1px orangered;
  border-radius: 4px;
  padding: 0 10px;

  @media(max-width: 475px) {
    top: 20px;
    left: 20px;
  }
`;
const Card = styled.figure`
  border-radius: 5px;
  border: solid 1px orange;
  padding: 30px 10px 10px 10px;
  box-shadow: 1px 1px 5px 0.3px orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;
  }
`;
const Info = styled.aside`
  border-radius: 5px;
  border: solid 1px orange;
  padding: 10px;
  flex-grow: 1;
  box-shadow: 1px 1px 5px 0.3px orange;
`;
const Ability = styled.div`
  padding: 10px;
  border: solid 1.5px orange;
  border-radius: 5px;
  height: 250px;
  overflow: auto;
  margin: 20px 0;

  h2 {
    font-weight: 400;
  }
`;
const AbilityEffect = styled.li`
  color: orange;
  text-align: justify;
  padding: 0 20px;

  span {
    color: white;
    font-size: 20px;
  }
`;
const MoveEffect = styled.li`
  color: orange;
  text-align: justify;
  padding: 0 20px;

  span {
    color: white;
    font-size: 12px;
  }
`;
const Moves = styled.div`
  padding: 10px;
  border: solid 1.5px orange;
  border-radius: 5px;
  height: 250px;
  overflow: auto;
  margin-bottom: 7px;

  h2 {
    font-weight: 400;
  }
`;
const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TypesTitle = styled.h2`
  font-weight: 400;
`;
const Types = styled.ul`
  display: inline-block;
  list-style: none;

  li {
    margin-left: 10px;
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export {Container , Ability , AbilityEffect , Card , Error ,Footer , Info , MoveEffect , Moves , StyledLink , Types , TypesTitle , Loading }