import { $base_http } from "../consts/axios"
import { LoadListType } from "../types"
import { PokemonListDto, PokemonListItem, PokemonType } from "../types/pokemon"

const loadList = async (values: PokemonListDto) => {
    const {offset, limit} = values

    const queryPath = `?offset=${offset}&limit=${limit}`

    const {data} = await $base_http.get<LoadListType<PokemonListItem>>('/pokemon' + queryPath)

    const mappedData = []

    for(const {url} of data.results){
        const urlParts = url.split('/')
        const id = urlParts[urlParts.length - 2];
        const res = await getById(id)
        mappedData.push(res)
    }

    return {...data, results: mappedData}
}

const getById = async (id: string) => {
    const {data} = await $base_http.get<PokemonType>(`/pokemon/${id}`)
    return data
}

export const pokemonService = {
    loadList,
    getById
}