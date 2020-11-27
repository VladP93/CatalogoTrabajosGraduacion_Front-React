import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "./SearchDegreeWork.css";

import axios from "axios";
import URL from "../../Api";

export default function SearchDegreeWork(props) {
  const { setIdTrabajo, setPage, toast } = props;
  const [data, setData] = useState([defaultData()]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [degreeWork, setDegreeWork] = useState(defaultData());
  const [reload, setReload] = useState(false);

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
    setReload(false);
  }, [url, reload]);

  const deleteDegreeWork = () => {
    axios
      .delete(url + "trabajosGraduacion/" + degreeWork.idTrabajo)
      .then(() => {
        toast.show({
          severity: "warn",
          summary: "Alerta",
          detail: "El registro ha sido eliminado!",
        });
        closeDeleteDialog();
      });
  };

  const closeDeleteDialog = () => {
    setDegreeWork({});
    setShowDeleteDialog(false);
    setReload(true);
  };

  const actionButtons = (data) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-info p-mr-2"
          onClick={() => {
            setIdTrabajo(data.idTrabajo);
            setPage("edit");
          }}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => {
            setDegreeWork(data);
            setShowDeleteDialog(true);
          }}
        />
      </>
    );
  };

  const deleteDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={closeDeleteDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteDegreeWork}
      />
    </>
  );

  return (
    <div>
      <h2>Trabajos de graduación</h2>
      <div style={{ marginRight: 20, marginLeft: 20 }}>
        <DataTable
          value={data}
          paginator={true}
          rows={5}
          emptyMessage="No se encontraron trabajos."
          scrollable
          scrollHeight="300px"
          className="fWidth"
        >
          <Column
            field="titulo"
            header="Título"
            filter
            filterPlaceholder="Título"
            filterHeaderClassName="txtFilter"
            headerStyle={{ width: "120px" }}
          ></Column>
          <Column
            field="autor"
            header="Autor"
            filter
            filterPlaceholder="Autor"
            headerStyle={{ width: "120px" }}
          ></Column>
          <Column
            field="anio"
            header="Año"
            filter
            filterPlaceholder="Año"
            headerStyle={{ width: "120px" }}
          ></Column>
          <Column
            field="facultad"
            header="Facultad"
            filter
            filterPlaceholder="Facultad"
            headerStyle={{ width: "120px" }}
          ></Column>
          <Column
            field="carrera"
            header="Carrera"
            filter
            filterPlaceholder="Carrera"
            headerStyle={{ width: "120px" }}
          ></Column>
          <Column
            field="tipo"
            header="Tipo"
            filter
            filterPlaceholder="Tipo"
            headerStyle={{ width: "120px" }}
          ></Column>
          <Column
            header="Acciones"
            body={actionButtons}
            headerStyle={{ width: "120px" }}
          ></Column>
        </DataTable>
      </div>

      <Dialog
        visible={showDeleteDialog}
        style={{ width: "450px" }}
        header="Confirmar"
        modal
        footer={deleteDialogFooter}
        onHide={closeDeleteDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle p-mr-3"
            style={{ fontSize: "2rem" }}
          />
          {degreeWork && (
            <span>
              ¿Está seguro que desea eliminar el trabajo{" "}
              <b>
                {degreeWork.tipo} <i>{degreeWork.titulo}</i>
              </b>{" "}
              de <b>{degreeWork.autor}</b>?
            </span>
          )}
        </div>
      </Dialog>
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
