import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "./DegreeWorkForm.css";

import axios from "axios";
import URL from "../../Api";

export default function DegreeWorkForm(props) {
  const { edit, idTrabajo, setPage, toast } = props;
  const [facultades, setFacultades] = useState([]);
  const [selectedFacultad, setSelectedFacultad] = useState("");
  const [carreras, setCarreras] = useState([carrerasDefault()]);
  const [selectedCarrera, setSelectedCarrera] = useState("");
  const [year, setYear] = useState(0);
  const [tipos, setTipos] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState("");
  const [formData, setFormData] = useState(defaultValues());
  const [reload, setReload] = useState(false);
  const url = URL.getUrl;

  useEffect(() => {
    if (idTrabajo) {
      axios.get(url + "trabajosGraduacion/" + idTrabajo).then((res) => {
        const datos = res.data;

        setFormData(datos);
        document.getElementById("titulo").value = datos.titulo;
        document.getElementById("autor").value = datos.autor;
        setYear(datos.anio);
        setSelectedTipo(datos.tipo);

        axios.get(url + "carreras").then((resC) => {
          resC.data.forEach((c) => {
            if (datos.carrera === c.idCarrera) {
              setSelectedFacultad(c.facultad);
            }
          });
        });

        setSelectedCarrera(datos.carrera);
      });
    }
  }, [idTrabajo, url]);

  useEffect(() => {
    axios.get(url + "facultades").then((res) => {
      var tempArray = [];
      res.data.forEach((f) => {
        const item = {};
        item.value = f.idFacultad;
        item.label = f.nombre;

        tempArray.push(item);
      });
      setFacultades(tempArray);
    });
  }, [url, reload]);

  useEffect(() => {
    if (selectedFacultad === "" || selectedFacultad === 0) {
      const carreraNull = {};
      carreraNull.label = "Por favor seleccione una facultad";
      carreraNull.value = 0;
    } else {
      axios.get(url + "carrerasFacultad/" + selectedFacultad).then((res) => {
        var tempArray = [];
        res.data.forEach((c) => {
          const item = {};
          item.value = c.idCarrera;
          item.label = c.nombre;

          tempArray.push(item);
        });
        setCarreras(tempArray);
      });
    }
    setReload(false);
  }, [selectedFacultad, url, reload]);

  useEffect(() => {
    axios.get(url + "tipos").then((res) => {
      var tempArray = [];
      res.data.forEach((t) => {
        const item = {};
        item.value = t.idTipo;
        item.label = t.nombre;

        tempArray.push(item);
      });
      setTipos(tempArray);
    });
    setReload(false);
  }, [url, reload]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (edit) {
        axios
          .put(url + "trabajosGraduacion/" + idTrabajo, formData)
          .then(() => {
            toast.show({
              severity: "success",
              summary: "Registro editado",
              detail:
                "Trabajo de graduación editado exitosamente, redirigiendo...",
            });
            setTimeout(() => {
              setPage("searchDegreeWork");
            }, 1000);
          });
      } else {
        formData.anio = year;
        formData.carrera = selectedCarrera;
        formData.tipo = selectedTipo;

        axios.post(url + "trabajosGraduacion", formData).then(() => {
          toast.show({
            severity: "success",
            summary: "Registro agregado",
            detail: "Trabajo de graduación agregado exitosamente",
          });
          resetForm();
        });
      }
    }
  };

  return (
    <div>
      <form
        className="container"
        onChange={onChange}
        onSubmit={onSubmit}
        id="form"
      >
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col">
            <label htmlFor="titulo">Título</label>
            <InputText id="titulo" type="text" name="titulo" required />
          </div>
          <div className="p-field p-col">
            <label htmlFor="autor">Autor</label>
            <InputText id="autor" type="text" name="autor" required />
          </div>
        </div>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col">
            <label htmlFor="facultad">Facultad</label>
            <Dropdown
              value={selectedFacultad}
              options={facultades}
              onChange={(e) => setSelectedFacultad(e.value)}
              placeholder="Seleccione facultad"
              name="facultad"
              id="facultad"
            />
          </div>
          <div className="p-field p-col">
            <label htmlFor="carrera">Carrera</label>
            <Dropdown
              value={selectedCarrera}
              options={carreras}
              onChange={(e) => setSelectedCarrera(e.value)}
              placeholder="Seleccione carrera"
              name="carrera"
            />
          </div>
        </div>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col">
            <label htmlFor="anio">Año</label>
            <Dropdown
              value={year}
              options={years()}
              onChange={(e) => setYear(e.value)}
              placeholder="Seleccione año"
              name="anio"
            />
          </div>
          <div className="p-field p-col">
            <label htmlFor="tipo">Tipo</label>
            <Dropdown
              value={selectedTipo}
              options={tipos}
              onChange={(e) => setSelectedTipo(e.value)}
              placeholder="Seleccione el tipo de trabajo"
              name="tipo"
            />
          </div>
        </div>
        <div className="p-fluid p-formgrid p-grid">
          <div
            className="p-field p-col"
            style={{ marginLeft: "30%", marginRight: "30%", marginTop: 15 }}
          >
            <Button
              label={edit ? "Editar" : "Agregar"}
              icon="pi pi-plus"
              iconPos="right"
            />
          </div>
        </div>
      </form>
    </div>
  );

  function validateForm() {
    var ok = true;
    var d = new Date();
    var n = d.getFullYear();

    if (!year || year === 0 || year === "" || year > n) {
      toast.show({
        severity: "error",
        summary: "Año incorrecto",
        detail: "Seleccione un año válido, por favor",
      });
      ok = false;
    }
    if (!selectedCarrera || selectedCarrera === 0 || selectedCarrera === "") {
      toast.show({
        severity: "error",
        summary: "Carrera incorrecta",
        detail: "Seleccione una carrera válida, por favor",
      });
      ok = false;
    }
    if (!selectedTipo || selectedTipo === 0 || selectedTipo === "") {
      toast.show({
        severity: "error",
        summary: "Tipo incorrecto",
        detail: "Seleccione un tipo de trabajo válido, por favor",
      });
      ok = false;
    }

    return ok;
  }

  function carrerasDefault() {
    return {
      label: "Por favor seleccione una facultad",
      value: 0,
    };
  }

  function years() {
    var valuesList = [];
    for (let i = 2000; i < 2099; i++) {
      const value = {};
      value.value = i;
      value.label = i;
      valuesList.push(value);
    }

    return valuesList;
  }

  function defaultValues() {
    return {
      titulo: "",
      autor: "",
      anio: "",
      carrera: "",
      tipo: "",
    };
  }

  function resetForm() {
    document.getElementById("form").reset();
    setReload(true);
    setSelectedFacultad(0);
    setSelectedCarrera(0);
    setSelectedTipo(0);
    setYear(0);
  }
}
