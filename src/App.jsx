import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonLayer from "./components/buttons/buttons-layer";
import CountriesList from "./components/countries-list";
import ApiServices from "./services/API-services"


function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])
  // sortOrder false === A-Z, true === Z-A
  const [sortOrder, setSortOrder] = useState(false)
  const [toggleFilterLTU, setToggleFilterLTU] = useState(false)
  const [toggleFilterOceania, setToggleFilterOceania] = useState(false)


  const handleFilterLTU = (e) => {
    if (!toggleFilterLTU) {
      setToggleFilterLTU(true)
    } else {
      setToggleFilterLTU(false)
    }
  }
  const handleFilterOceania = (e) => {
    if (!toggleFilterOceania) {
      setToggleFilterOceania(true)
    } else {
      setToggleFilterOceania(false)
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
      name: "Smaller than Lithuania",
      onClick: handleFilterLTU,
      toggled: toggleFilterLTU
    },
    {
      name: "Region: Oceania",
      onClick: handleFilterOceania,
      toggled: toggleFilterOceania
    },
  ]

  const sortingButtonParams = [{
    onClick: handleSorting,
    toggled: sortOrder,
    ...(sortOrder ? { name: "Z-A" } : { name: "A-Z" }),
  }]


  useEffect(() => {
    (async () => {
      const data = await ApiServices.getData(sortOrder,toggleFilterLTU,toggleFilterOceania);
      setCountries(data)
    })();
  }, [toggleFilterLTU, toggleFilterOceania, sortOrder])

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
