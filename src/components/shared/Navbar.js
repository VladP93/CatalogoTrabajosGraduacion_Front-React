import React from "react";
import { Menubar } from "primereact/menubar";
import "./nabvar.css";

export default function Navbar(props) {
  const { setPage } = props;

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-fw pi-home",
      command: () => {
        setPage("welcome");
      },
    },
    {
      label: "Agregar trabajo de grado",
      icon: "pi pi-fw pi-plus",
      command: () => {
        setPage("addDegreeWork");
      },
    },
    {
      label: "Buscar trabajo de grado",
      icon: "pi pi-fw pi-search",
      command: () => {
        setPage("searchDegreeWork");
      },
    },
    // {
    //   label: "Editar/Eliminar trabajo de grado",
    //   icon: "pi pi-fw pi-exclamation-triangle",
    // },
    {
      label: "Estadísticas",
      icon: "pi pi-fw pi-chart-bar",
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
