import {
  Container,
  Ability,
  AbilityEffect,
  Card,
  Error,
  Footer,
  Info,
  MoveEffect,
  Moves,
  StyledLink,
  Types,
  TypesTitle,
} from "../../assets/styles/styledOfDetails";

const RenderDetails = (props) => {
  return (
    <Container>
      {props.erro && (
        <>
          <StyledLink to={`/`}> Voltar </StyledLink>
          <Error>
            Não conseguimos encontrar este pokemon 😿
            <span> Erro: {props.erro} </span>
            Verifique se você digitou o nome do pokemon corretamente e tente
            novamente!
          </Error>
        </>
      )}

      {props.details && (
        <>
          <StyledLink to={`/`}> Voltar </StyledLink>
          <Card>
            <img
              src={props.details.sprites?.front_default}
              alt={props.details.name}
            />
            <h1>{props.details.name}</h1>
          </Card>
          <Info>
            <Ability>
              <h2>ABILITIES</h2>
              <ul>
                {props.abilitiesNames?.map((ability) => {
                  return (
                    <AbilityEffect key={ability.data.name}>
                      {ability.data.effect_entries.map((e) => {
                        return (
                          <>
                            <span>
                              {e.language.name === "en"
                                ? ability.data.name + ": "
                                : null}
                            </span>
                            {e.language.name === "en" ? e.effect : null}
                          </>
                        );
                      })}
                    </AbilityEffect>
                  );
                })}
              </ul>
            </Ability>
            <Moves>
              <h2>MOVES</h2>
              <ul>
                {props.moves?.map((moves) => {
                  return (
                    <MoveEffect key={moves.data.id}>
                      <span>Name: </span>
                      {moves.data.name}
                      {/* <span> Category: </span>
                      {id.data.meta?.category.name ?? "Category undefined"} */}
                    </MoveEffect>
                  );
                })}
              </ul>
            </Moves>
            <Footer>
              <TypesTitle>Types :</TypesTitle>
              {props.details.types?.map((e) => {
                return (
                  <Types key={e.type.name}>
                    <li>- {e.type.name}</li>
                  </Types>
                );
              })}
            </Footer>
          </Info>
        </>
      )}
    </Container>
  );
};

export { RenderDetails };
