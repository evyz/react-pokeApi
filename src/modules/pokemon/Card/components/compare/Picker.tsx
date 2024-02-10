import { Dispatch, FC, SetStateAction, useCallback, useState } from "react"
import { pokemonService } from "../../../../../services/pokemon"
import { defaultLimit, limits } from "../../../../../consts"
import useSWR from "swr"
import { PokemonCard } from "../../../PokemonCard"
import { Box, Grid, MenuItem, Pagination, Select } from "@mui/material"

interface PickerFormProps{
    setData: Dispatch<SetStateAction<number | undefined>>
}

export const PickerForm: FC<PickerFormProps> = ({setData}) => {
    
    const [limit, setLimit] = useState(defaultLimit)
    const [page, setPage] = useState(1)
    const fetcher = useCallback(() => pokemonService.loadList({offset: (page - 1) * limit, limit: limit}), [limit, page])
    const {data, isLoading} = useSWR(`/${limit}-${page}`, fetcher, {revalidateOnMount: true})
    const count = data?.count ? data.count % limit !== 0 ? Math.round(data.count / limit) + 1 : data.count / limit  : 0

    if(isLoading) { return null }

    return (    
        <Box sx={{background: 'white', width: '80%', height: '90%', overflow: 'scroll'}}>
            <Grid container>{data?.results.map((item) => <PokemonCard onOpenCard={(id) => setData(id)} data={item} />)}</Grid>
            <Select onChange={(event) => setLimit(event.target.value as number)} value={limit}>
                {limits.map(limit => <MenuItem value={limit}>{limit}</MenuItem>)}
            </Select>
            <Pagination
                onChange={(_event, page) => setPage(page)} 
                count={count} 
                disabled={isLoading || !data?.count} 
            />
        </Box>
    )
}