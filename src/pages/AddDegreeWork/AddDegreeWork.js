import React from "react";
import DegreeWorkForm from "../../components/Forms/DegreeWorkForm";

export default function AddDegreeWork(props) {
  const { toast } = props;
  return (
    <div>
      <h2>Agregar trabajo de graduación</h2>
      <DegreeWorkForm toast={toast} />;
    </div>
  );
}
