import React, { useEffect, useState } from "react";
import CountryComponent from "./country-component";
import ApiServices from "../services/API-services";

const CountriesList = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        (async () => {
            const data = await ApiServices.getData();
            setCountries(data)
        })();
    }, [])

    console.log(countries)
    return(
        <>
        {countries.map((country) =>(
            <CountryComponent
            key={country.name}
            id={country.name}
            {...country}
            />
        ))}
        </>
    )
}

export default CountriesList