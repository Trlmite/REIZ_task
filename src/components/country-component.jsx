import React from "react";
import {Box,Typography} from '@mui/material'


const CountryComponent = ({name, region, area}) => {

    return(
        <Box sx={{
        border: 1, 
        borderRadius: 8, 
        bgcolor: 'success.main', 
        padding: 2.5, 
        my: 1,
        color: 'common.white'}}>
            <Typography>Country : {name}</Typography>
            <Typography>Region: {region}</Typography>
            <Typography>Area: {area} km2</Typography>
        </Box>
    )
}

export default CountryComponent