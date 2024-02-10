import useSWR from "swr"
import { pokemonService } from "../../services/pokemon"
import { useCallback, useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard"
import { Backdrop, Grid, LinearProgress, MenuItem, Pagination, Select } from "@mui/material"
import { defaultLimit, limits } from "../../consts"
import { useNavigate } from "react-router-dom"

export const PokemonList = () => {

    const navigate = useNavigate()

    const [limit, setLimit] = useState(defaultLimit)
    const [page, setPage] = useState(1)

    const fetcher = useCallback(() => pokemonService.loadList({offset: (page - 1) * limit, limit: limit}), [limit, page])
    const {data, isLoading, error} = useSWR(`/${limit}-${page}`, fetcher, {revalidateOnMount: true})

    useEffect(() => {
        if(error){
            console.log('error', error)
            alert('Ошибка!')
        }
    }, [error])

    const count = data?.count ? data.count % limit !== 0 ? Math.round(data.count / limit) + 1 : data.count / limit  : 0

    const onOpenCard = (id: number) => navigate(`/${id}`)
    
    return (
        <>
            <Backdrop open={isLoading}>
                <LinearProgress />
            </Backdrop>
            <Grid container>{data?.results.map(item => <PokemonCard onOpenCard={onOpenCard} data={item} />)}</Grid>
            <Grid container>
                <Select onChange={(event) => setLimit(event.target.value as number)} value={limit}>
                    {limits.map(limit => <MenuItem value={limit}>{limit}</MenuItem>)}
                </Select>
                <Pagination 
                    onChange={(_event, page) => setPage(page)} 
                    count={count} 
                    disabled={isLoading || !data?.count} 
                /> 
            </Grid>
        </>
    )
    
}