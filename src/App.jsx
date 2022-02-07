import { Container } from "@mui/material";
import React from "react";
import ButtonLayer from "./components/buttons/buttons-layer";
import CountriesList from "./components/countries-list";



function App() {


  return (
    <Container maxWidth="xl">
      <ButtonLayer/>
      <CountriesList/>
    </Container>
  );
}

export default App;
