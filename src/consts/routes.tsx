import { createBrowserRouter } from "react-router-dom";
import { Pokemon } from "../modules/pokemon";
import { PokemonCard } from "../modules/pokemon/Card";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Pokemon />
    },
    {
        path: '/:id',
        element: <PokemonCard />
    },
])