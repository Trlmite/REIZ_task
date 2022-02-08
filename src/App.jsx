import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonLayer from "./components/buttons/buttons-layer";
import CountriesList from "./components/countries-list";
import ApiServices from "./services/API-services"


function App() {
  const [countries,setCountries] = useState([])
  // sortOrder false === A-Z, true === Z-A
  const [sortOrder,setSortOrder] = useState(false)
  const [toggleFilterLTU, setToggleFilterLTU] = useState(false)
  const [toggleFilterOceania, setToggleFilterOceania] = useState(false)
  

  const handleFilterLTU = (e) =>{
      if(!toggleFilterLTU){
        setToggleFilterLTU(true)
        setToggleFilterOceania(false)
      }else{
        setToggleFilterLTU(false)
      }
      console.log("mazesnes nei LTU")
}
  const handleFilterOceania = (e) => {
    if(!toggleFilterOceania){
      setToggleFilterOceania(true)
      setToggleFilterLTU(false)
    }else{
      setToggleFilterOceania(false)
    }

    console.log("region Oceania")
}

const handleSorting = (e) =>{
  if(sortOrder){
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

  const sortingButtonParams =[{
    onClick: handleSorting, 
    toggled: sortOrder,
    ...(sortOrder? {name:"Z-A"} :{name:"A-Z"}),
  }]
  

  useEffect(()=>{
    //pagal filtrus, formuojami filtru parametrai,
    // pagal rikiavima formuojami filtravimo parametrai
    // naudojant API service, siunciame vartojus, perduodami filtru ir rikiavimo parametrus.
    // gave duomenis, naudojame setCountries, 
    (async () => {
      const data = await ApiServices.getData();
      if(toggleFilterLTU){
        const filterLTU = data.find(x => x.name === "Lithuania")
        const newData = data.filter(country => country.area < filterLTU.area)
        console.log({filterLTU, newData})
        setCountries(newData)
      } else if(toggleFilterOceania){
        const newData = data.filter(country => country.region === "Oceania")
        console.log({newData})
        setCountries(newData)
      } else{
        console.log(data)
        setCountries(data)
      }
  })();
  },[toggleFilterLTU,toggleFilterOceania, sortOrder])

  return (
    <Container maxWidth="xl">
      <ButtonLayer
        params={filterButtonParams}
        sorting={sortingButtonParams}
      />
      <CountriesList
      countries={countries}
      sorting={sortOrder}
      />
    </Container>
  );
}

export default App;
