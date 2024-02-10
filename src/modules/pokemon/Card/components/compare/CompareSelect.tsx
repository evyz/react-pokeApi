import { Backdrop, Button } from "@mui/material"
import { Dispatch, FC, SetStateAction, useReducer } from "react"
import { PickerForm } from "./Picker"

interface CompareSelectProps{
    setData: Dispatch<SetStateAction<number | undefined>>
}

export const CompareSelect: FC<CompareSelectProps> = ({setData}) => {

    const [isOpen, toggleIsOpen] = useReducer(prev => !prev, false)

    return (
        <>
            <Button onClick={toggleIsOpen}>Select another pokemon</Button>
            <Backdrop open={isOpen}>
                {isOpen && <PickerForm setData={setData} />}
            </Backdrop>
        </>
    )
}