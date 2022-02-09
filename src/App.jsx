import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonLayer from "./components/buttons/buttons-layer";
import CountriesList from "./components/countries-list";
import ApiServices from "./services/API-services"

const FilterCountry = "Lithuania"
const FilterRegion = "Oceania"


function App() {
  const [countries, setCountries] = useState([])
  const [filters, setFilter] = useState({
    area: null,
    region: null,
  })
  // sortOrder false === A-Z, true === Z-A
  const [sortOrder, setSortOrder] = useState(false)

  const handleFilterArea = (e) => {
    if (filters.area === null) {
      setFilter({
        region: filters.region,
        area: FilterCountry,
      })
    } else {
      setFilter({
        area: null,
        region: filters.region
      })
    }
  }
  const handleFilterRegion= (e) => {
    if (filters.region === null) {
      setFilter({
        region: FilterRegion,
        area: filters.area
      })
    } else {
      setFilter({
        area: filters.area,
        region: null,
      })
    }
  }

  const handleSorting = (e) => {
    if (sortOrder) {
      setSortOrder(false)
    } else {
      setSortOrder(true)
    }
  }


  const filterButtonParams = [
    {
      name: `Smaller than ${FilterCountry}`,
      onClick: handleFilterArea,
      toggled: filters.area
    },
    {
      name: `Region: ${FilterRegion} `,
      onClick: handleFilterRegion,
      toggled: filters.region
    },
  ]

  const sortingButtonParams = [{
    onClick: handleSorting,
    toggled: sortOrder,
    ...(sortOrder ? { name: "Z-A" } : { name: "A-Z" }),
  }]


  useEffect(() => {
    (async () => {
      const data = await ApiServices.getData(sortOrder, filters);
      setCountries(data)
    })();
  }, [filters, sortOrder])

  return (
    <Container maxWidth="xl">
      <ButtonLayer
        params={filterButtonParams}
        sorting={sortingButtonParams}
      />
      <CountriesList
        countries={countries}
      />
    </Container>
  );
}

export default App;
