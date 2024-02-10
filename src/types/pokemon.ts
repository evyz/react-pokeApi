import { ListItem } from ".";

export type PokemonListDto = {
    offset: number;
    limit: number;
}

export type PokemonListItem = ListItem

export type SpritesType = {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}

export type TypeDto = {
    slot: number;
    type: ListItem;
}

type StatType = {
    base_stat: number;
    effort: number;
    stat: ListItem;
}

export type PokemonType = {
    id: number;
    name: string;
    order: number;
    height: number;
    weight: number;
    sprites: SpritesType;
    types: TypeDto[];
    stats: StatType[];
}