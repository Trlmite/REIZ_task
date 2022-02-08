import React from "react";
import { Box } from '@mui/material';
import FilterButton from "./filter-button";


const ButtonLayer = ({ params, sorting }) => {

    return (
        <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
            <Box sx={{ display: "flex", gap: 2 }}>
                {params.map((button) =>
                    <FilterButton
                        key={button.name}
                        id={button.name}
                        {...button}
                    />
                )}
            </Box>
            <Box>
                {sorting.map((button) =>
                    <FilterButton
                        key={button.name}
                        id={button.name}
                        {...button}
                    />
                )}
            </Box>
        </Box>
    )
}

export default ButtonLayer