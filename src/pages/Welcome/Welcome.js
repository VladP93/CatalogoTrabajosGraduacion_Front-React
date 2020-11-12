import React from "react";
import CardMenu from "../../components/Welcome/CardMenu";

export default function Welcome(props) {
  const { setPage } = props;
  return (
    <div>
      <h1>Bienvenido</h1>
      <h2>Sistema de control para trabajos de graduación</h2>
      <div
        className="p-grid"
        style={{ marginTop: 30, marginRight: 10, marginLeft: 10 }}
      >
        <div className="p-col-12 p-lg-4 p-md-12">
          <CardMenu
            title="Agregar registro"
            subtitle="Agrega un nuevo trabajo de graduación en la base de datos"
            setPage={setPage}
            goto="addDegreeWork"
          />
        </div>
        <div className="p-col-12 p-lg-4 p-md-12">
          <CardMenu
            title="Buscar registro"
            subtitle="Lista los diferentes trabajos de graduación con un buscador"
            setPage={setPage}
            goto="searchDegreeWork"
          />
        </div>
        <div className="p-col-12 p-lg-4 p-md-12">
          <CardMenu
            title="Estadísticas"
            subtitle="Muestra las estadísticas de los trabajos de graduación registrados"
            setPage={setPage}
            goto="stats"
          />
        </div>
      </div>
    </div>
  );
}
