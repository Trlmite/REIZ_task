import React, { useState } from "react";
import { Box} from '@mui/material';
import FilterButton from "./filter-button";

const ButtonLayer = () => {
    const[sorting, setSorting] = useState(true)

    const handleSorting = (e) =>{
        if(sorting){
            setSorting(false)
        } else {
            setSorting(true)
        }

    }

    return(
        <Box sx={{display: "flex", justifyContent: 'space-between'}}>
            <Box sx={{display: "flex", gap: 2}}>
                <FilterButton
                name="Smaller than LT"
                />
                <FilterButton
                name="Region: Oceania"
                />
            </Box>
            <Box>
            <FilterButton
                name={sorting ? "A-Z" : "Z-A"}
                onClick={handleSorting}
                />
            </Box>
        </Box>
    )
}

export default ButtonLayer