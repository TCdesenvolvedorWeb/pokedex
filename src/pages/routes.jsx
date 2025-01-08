import { BrowserRouter , Routes , Route } from "react-router-dom";
import { RenderPokemonList } from "./RenderPokemonList";
import { Details } from "./pokemonDetails";

const AppRoutes = () => {
    return(
        <BrowserRouter> 
            <Routes>
                <Route exact path="/" element={ <RenderPokemonList/> } />
                <Route exact path="/Details" element={ <Details/> } />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes };