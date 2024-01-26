import { useParams } from "react-router-dom"
import useSWR from "swr"
import { pokemonService } from "../../../services/pokemon"
import { Box, Typography } from "@mui/material"

export const PokemonCard = () => {

    const id = useParams().id as string
    const {data, isLoading} = useSWR(`/${id}`, async () => await pokemonService.getById(id)) 

    if(isLoading) { return null }

    return (
        <Box>
            <Typography>{data?.id}</Typography>
            <Typography>{data?.name}</Typography>
            <Typography>{data?.weight}</Typography>
            <Typography>{data?.height}</Typography>
        </Box>
    )
}