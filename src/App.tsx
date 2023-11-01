import React from "react";
import Container from "./components/container/container";
import Data from './components/dataContainer/dataContainer';
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <h3>Contacts</h3>
      <Data />
      </Container>
    </>
  );
}

export default App;
