import { Box } from "@mui/material";
import React from "react";
import CountryComponent from "./country-component";


const CountriesList = ({countries, sorting}) => {


    return(
        <Box sx={{display: 'flex', flexDirection: sorting? 'column-reverse' :"column" }}>
        {countries.map((country) =>(
            <CountryComponent
            key={country.name}
            id={country.name}
            {...country}
            />
        ))}
        </Box>
    )
}

export default CountriesList