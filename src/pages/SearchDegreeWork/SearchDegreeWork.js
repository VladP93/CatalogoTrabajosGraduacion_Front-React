import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import axios from "axios";
import URL from "../../Api";

export default function SearchDegreeWork() {
  const [data, setData] = useState([defaultData()]);

  const url = URL.getUrl;

  useEffect(() => {
    axios
      .get(url + "trabajosGraduacion")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div>
      <h2>Trabajos de graduación</h2>
      <div style={{ marginRight: 20, marginLeft: 20 }}>
        <DataTable
          value={data}
          paginator={true}
          rows={5}
          emptyMessage="No customers found."
        >
          <Column
            field="titulo"
            header="Título"
            filter
            filterPlaceholder="Buscar por Título"
          ></Column>
          <Column
            field="autor"
            header="Autor"
            filter
            filterPlaceholder="Buscar por Autor"
          ></Column>
          <Column
            field="anio"
            header="Año"
            filter
            filterPlaceholder="Buscar por Año"
          ></Column>
          <Column
            field="facultad"
            header="Facultad"
            filter
            filterPlaceholder="Buscar por Facultad"
          ></Column>
          <Column
            field="carrera"
            header="Carrera"
            filter
            filterPlaceholder="Buscar por Carrera"
          ></Column>
          <Column
            field="tipo"
            header="Tipo"
            filter
            filterPlaceholder="Buscar por Tipo"
          ></Column>
        </DataTable>
      </div>
    </div>
  );

  function defaultData() {
    return {
      anio: "",
      autor: "",
      carrera: "",
      facultad: "",
      tipo: "",
      titulo: "",
    };
  }
}
