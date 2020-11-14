import React from "react";
import { Menubar } from "primereact/menubar";
import "./nabvar.css";

export default function Navbar(props) {
  const { setPage, page } = props;

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      className: page === "welcome" && "active",
      command: () => {
        setPage("welcome");
      },
    },
    {
      label: "Agregar trabajo de grado",
      icon: "pi pi-fw pi-plus",
      className: page === "addDegreeWork" && "active",
      command: () => {
        setPage("addDegreeWork");
      },
    },
    {
      label:
        page === "edit"
          ? "Buscar trabajo de grado - Editando..."
          : "Buscar trabajo de grado",
      icon: "pi pi-fw pi-search",
      className: (page === "searchDegreeWork" || page === "edit") && "active",
      command: () => {
        setPage("searchDegreeWork");
      },
    },
    {
      label: "Estadísticas",
      icon: "pi pi-fw pi-chart-bar",
      className: page === "stats" && "active",
      command: () => {
        setPage("stats");
      },
    },
  ];

  return (
    <>
      <Menubar model={items} className="layout-menubar" />
      <br />
      <br />
    </>
  );
}
