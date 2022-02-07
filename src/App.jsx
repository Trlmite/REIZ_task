import { Container } from "@mui/material";
import React from "react";
import CountryComponent from "./components/country-component";
import ButtonLayer from "./components/buttons/buttons-layer";
import ApiServices from "./services/API-services";


function App() {

 const fetcedData = ApiServices.getData()

 console.log(fetcedData)

  return (
    <Container maxWidth="xl">
      <ButtonLayer/>
      <CountryComponent/>
      <CountryComponent/>
      <CountryComponent/>
    </Container>
  );
}

export default App;
