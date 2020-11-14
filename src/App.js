import React, { useState } from "react";
import "./App.css";

import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Navbar from "./components/shared/Navbar";
import Welcome from "./pages/Welcome";
import AddDegreeWork from "./pages/AddDegreeWork";
import EditDegreeWork from "./pages/EditDegreeWork";
import SearchDegreeWork from "./pages/SearchDegreeWork";
import Stats from "./pages/Stats";
import Footer from "./components/shared/Footer";

export default function App() {
  const [page, setPage] = useState("welcome");
  const [idTrabajo, setIdTrabajo] = useState(0);
  const [toast, setToast] = useState(null);

  const pageHandler = () => {
    switch (page) {
      case "welcome":
        return <Welcome setPage={setPage} />;
      case "addDegreeWork":
        return <AddDegreeWork toast={toast} />;
      case "searchDegreeWork":
        return (
          <SearchDegreeWork
            setIdTrabajo={setIdTrabajo}
            setPage={setPage}
            toast={toast}
          />
        );
      case "stats":
        return <Stats />;
      case "edit":
        return (
          <EditDegreeWork
            idTrabajo={idTrabajo}
            setPage={setPage}
            toast={toast}
          />
        );
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
      <br />
      <Footer />
      <Toast ref={(el) => setToast(el)} />
    </div>
  );
}
