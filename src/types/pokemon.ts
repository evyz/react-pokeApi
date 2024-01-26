export type PokemonListDto = {
    offset: number;
    limit: number;
}

export type PokemonListItem = {
    name: string;
    url: string;
}

export type SpritesType = {
    back_default?: string;
    front_default?: string;
}

export type PokemonType = {
    id: number;
    name: string;
    order: number;
    height: number;
    weight: number;
    sprites: SpritesType;
}