import { Avatar, Box, Skeleton, Typography, Button, Grid } from "@mui/material";
import { PokemonType } from "../../../../types/pokemon";
import { FC, useReducer } from "react";
import { Tag } from "../../../../components/Tag";

interface FormProps{
    data?: PokemonType;
    isLoading: boolean;
}

export const Form: FC<FormProps> = ({data, isLoading}) => {

    const [isInfront, toggleIsInFront] = useReducer((prev) => !prev, true)

    return (
        <Box sx={{width: '100%'}}>
            {isLoading ? 
                <>
                    <Skeleton height={96} width={96} />
                    <Skeleton height={80} width={200} />
                    <Skeleton height={20} width={40} />
                    <Skeleton height={20} width={40} />
                    <Skeleton height={20} width={40} />
                    <Box style={{display: 'flex', flexDirection: 'row', gap: 3}} >
                        <Skeleton height={40} width={90} />
                        <Skeleton height={40} width={90} />
                        <Skeleton height={40} width={90} />
                    </Box>
                </>
             : 
                <>
                    <Box style={{display: 'flex', flexDirection: 'row', gap: 3}} >
                        <Avatar 
                            sx={{width: 96, height: 96, bgColor: 'grey'}} 
                            src={isInfront ? data?.sprites?.front_default: data?.sprites?.back_default} 
                            alt={"Avatar"} 
                        />
                        {data?.sprites?.back_default && <Button onClick={toggleIsInFront}>Rotate</Button>}
                    </Box>
                    <Typography variant="h2">{data?.name}</Typography>
                    <Typography variant="body1">Height: {data?.height}</Typography>
                    <Typography variant="body1">Weight: {data?.weight}</Typography>
                    <Box style={{display: 'flex', flexDirection: 'row', gap: 3}} >
                        {data?.types?.map(({type: {name}}) => <Tag name={name} />)}
                    </Box>

                    <Box sx={{marginTop: 1.5}}>
                        
                        <Typography sx={{marginBottom: 1.5}} variant="h5">Stats: </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{borderBottom:'1px solid black' }}>
                                <Typography variant="h6">stat name: </Typography>
                            </Grid>
                            <Grid item xs={8} sx={{borderBottom:'1px solid black'}}>
                                <Typography variant="body1">base value: </Typography>
                            </Grid>
                            {data?.stats?.map(({base_stat, stat: {name}}, index) => 
                                <>
                                    <Grid item xs={4} sx={{background: index % 2 === 0 ? '#F2F2F2' : '#fff'}}>
                                        <Typography variant="h6">{name}</Typography>
                                    </Grid>
                                    <Grid item xs={8} sx={{background: index % 2 === 0 ? '#F2F2F2' : '#fff'}}>
                                        <Typography variant="body1">{base_stat}</Typography>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>
                </>
             }
        </Box>
    )
}