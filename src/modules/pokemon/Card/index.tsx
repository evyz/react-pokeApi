import { useParams } from "react-router-dom"
import useSWR from "swr"
import { pokemonService } from "../../../services/pokemon"
import { Form } from "./components/Form"
import { Button, Grid } from "@mui/material"
import { useEffect, useReducer, useState } from "react"
import { CompareSelect } from "./components/compare/CompareSelect"

export const PokemonCard = () => {

    const id = useParams().id as string
    const {data, isLoading} = useSWR(id, () => pokemonService.getById(id)) 

    const [isCompareMode, toggleIsCompareMode] = useReducer((prev) => !prev, false)
    const [secondId, setSecondId] = useState<number | undefined>(undefined)

    const {data: secondData, isLoading: isSecondLoading} = useSWR(`${secondId}`, () => secondId ? pokemonService.getById(`${secondId}`) : undefined) 
    
    useEffect(() => {
        if(!isCompareMode){
            setSecondId(undefined)
        }
    }, [isCompareMode])

    if(isLoading || isSecondLoading) { return null }

    return (
       <>
            <Button onClick={toggleIsCompareMode}>{isCompareMode ? "Disable Compare Mode" : "Compare Mode"}</Button>
            <Grid container spacing={isCompareMode ? 6 : 0}>
                <Grid item xs={isCompareMode ? 6 : 12}>
                    <Form data={data} isLoading={isLoading} />
                </Grid>
                {isCompareMode &&
                    (
                        !secondData ? <CompareSelect setData={setSecondId} /> : 
                        <Grid item xs={isCompareMode ? 6 : 12}>
                            <Form data={secondData} isLoading={isLoading} />
                        </Grid>
                    )
                }
            </Grid>
       </>
    )
}