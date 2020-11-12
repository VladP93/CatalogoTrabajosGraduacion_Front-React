import React, { useState } from "react";
import "./App.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Navbar from "./components/shared/Navbar";
import Welcome from "./pages/Welcome";
import AddDegreeWork from "./pages/AddDegreeWork";
import SearchDegreeWork from "./pages/SearchDegreeWork";
import Stats from "./pages/Stats";
import Footer from "./components/shared/Footer";

export default function App() {
  const [page, setPage] = useState("welcome");

  const pageHandler = () => {
    switch (page) {
      case "welcome":
        return <Welcome setPage={setPage} />;
      case "addDegreeWork":
        return <AddDegreeWork />;
      case "searchDegreeWork":
        return <SearchDegreeWork />;
      case "stats":
        return <Stats />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <Navbar setPage={setPage} />
      </header>
      <br />
      {pageHandler()}
      <Footer />
    </div>
  );
}
