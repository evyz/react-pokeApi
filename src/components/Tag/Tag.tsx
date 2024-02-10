import { Button } from "@mui/material";
import { FC } from "react";

interface TagProps{
    name: string;
    onClick?: () => void;
}

export const Tag: FC<TagProps> = ({name, onClick}) => (
    <Button variant="outlined" disabled onClick={onClick}>{name}</Button>
)