import React from "react";
import {Box,Typography} from '@mui/material'

const CountryComponent = () => {

    return(
        <Box sx={{
        border: 1, 
        borderRadius: 8, 
        bgcolor: 'success.main', 
        padding: 2.5, 
        my: 1,
        color: 'common.white'}}>
            <Typography>Name : Lithuania</Typography>
            <Typography>Region: Europe</Typography>
            <Typography>Area: 35000</Typography>
        </Box>
    )
}

export default CountryComponent