import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function CardMenu(props) {
  const { title, subtitle, setPage, goto } = props;

  const changePage = (goto) => {
    setPage(goto);
  };

  return (
    <div>
      <Card title={title} subTitle={subtitle}>
        <Button
          label="Ir"
          icon="pi pi-fw pi-arrow-right"
          iconPos="right"
          onClick={() => {
            changePage(goto);
          }}
        />
      </Card>
    </div>
  );
}
