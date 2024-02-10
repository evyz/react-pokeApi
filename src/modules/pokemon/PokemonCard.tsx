import { Avatar, Button, Card, Typography } from "@mui/material"
import { FC } from "react"
import { PokemonType } from "../../types/pokemon";

interface PokemonCardProps{
    data: PokemonType;
    onOpenCard?: (id: number) => void;
}

export const PokemonCard: FC<PokemonCardProps> = ({data, onOpenCard}) => {
    return (
        <Card style={{margin: 10, padding: 10}}>
            <Avatar src={data?.sprites.front_default} alt={data.name} />
            <Typography>{data.name}</Typography>
            {data?.weight && <Typography>Вес: {data.weight}</Typography>}
            {data?.height && <Typography>Рост: {data.height}</Typography>}
            <Button onClick={() => onOpenCard?.(data.id)}>Открыть</Button>
        </Card>
    )
}