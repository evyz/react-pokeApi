import { $base_http } from "../../contsts/axios"
import { LoadListType } from "../../types"
import { PokemonListDto, PokemonListItem, PokemonType } from "../../types/pokemon"

const loadList = async (values: PokemonListDto) => {
    const {offset, limit} = values

    const queryPath = `?offset=${offset}&limit=${limit}`

    const {data} = await $base_http.get<LoadListType<PokemonListItem>>('/pokemon' + queryPath)

    return data
}

const getById = async (id: string) => {
    const {data} = await $base_http.get<PokemonType>(`/pokemon/${id}`)
    return data
}

export const pokemonService = {
    loadList,
    getById
}