import React, { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllModules } from "ag-grid-enterprise";

const DetailCellRenderer = ({ data, node, api }) => {
  const colDefs = [
    { headerName: "Ref #", field: "ref" },
    { headerName: "Total Quantity", field: "quantity" },
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 120,
  };

  const rowData = [
    {
      ref: null,
      quantity: null,
    },
    {
      ref: null,
      quantity: null,
    },
    {
      ref: null,
      quantity: null,
    },
    {
      ref: null,
      quantity: null,
    },
    {
      ref: null,
      quantity: null,
    },
  ];

  return (
    <div className="full-width-panel">
      <AgGridReact
        id="detailGrid"
        className="full-width-grid ag-theme-alpine"
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        modules={AllModules}
      />

      <AgGridReact
        id="detailGrid"
        className="full-width-grid ag-theme-alpine"
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        modules={AllModules}
      />

      <AgGridReact
        id="detailGrid"
        className="full-width-grid ag-theme-alpine"
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        modules={AllModules}
      />

      <AgGridReact
        id="detailGrid"
        className="full-width-grid ag-theme-alpine"
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        modules={AllModules}
      />
    </div>
  );
};

export default DetailCellRenderer;
