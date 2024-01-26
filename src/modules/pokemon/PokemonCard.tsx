import { Avatar, Button, Card, Skeleton, Typography } from "@mui/material"
import { FC, useEffect } from "react"
import useSWR from "swr";
import { pokemonService } from "../../services/pokemon";

interface PokemonCardProps{
    name: string;
    url: string;
    onOpenCard?: (id: string) => void;
}

export const PokemonCard: FC<PokemonCardProps> = ({name, url, onOpenCard}) => {

    const urlParts = url.split('/')
    const id = urlParts[urlParts.length - 2];

    const {isLoading, error, data} = useSWR(url, () => pokemonService.getById(id))

    useEffect(() => {
        if(error){
            console.log('error', error)
            alert('Ошибка!')
        }
    }, [error])

    return (
        <Card style={{margin: 10, padding: 10}}>
            {isLoading ? <Skeleton variant="circular" width={30} height={30} /> : <Avatar src={data?.sprites.front_default} alt={name} />}
            <Typography>{name}</Typography>
            {data?.weight && <Typography>Вес: {data.weight}</Typography>}
            {data?.height && <Typography>Рост: {data.height}</Typography>}
            <Button onClick={() => onOpenCard?.(id)}>Открыть</Button>
        </Card>
    )
}