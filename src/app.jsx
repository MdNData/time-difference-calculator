import React from "react";
import "./index.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Header from "./assets/components/Header/Header";
import Calculator from "./assets/components/Calculator/Calculator";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Calculator />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
