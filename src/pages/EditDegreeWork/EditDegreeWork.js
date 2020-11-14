import React from "react";
import DegreeWorkForm from "../../components/Forms/DegreeWorkForm";

export default function EditDegreeWork(props) {
  const { idTrabajo, setPage, toast } = props;
  return (
    <div>
      <h2>Editar trabajo de graduación</h2>
      <DegreeWorkForm
        idTrabajo={idTrabajo}
        edit={true}
        setPage={setPage}
        toast={toast}
      />
    </div>
  );
}
