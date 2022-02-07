import React from "react";
import { Box} from '@mui/material';
import FilterButton from "./filter-button";

const ButtonLayer = () => {

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
                name="A-Z"
                />
            </Box>
        </Box>
    )
}

export default ButtonLayer