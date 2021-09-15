import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const BasicTable = () => {
  const rowData = [
    {
      ref: "B",
      description: "PPF-402 Phenol Feed Machine",
      maxPerLoad: 1,
      numInLoad: "N/A",
      numTrayDisplaced: 2,
    },
    {
      ref: "C",
      description: "CUNO Flex Hose",
      maxPerLoad: 2,
      numInLoad: "N/A",
      numTrayDisplaced: 2,
    },
    {
      ref: "D",
      description: "PVDF (Harvest) Wand",
      maxPerLoad: 1,
      numInLoad: "N/A",
      numTrayDisplaced: 2,
    },
    {
      ref: "K",
      description: "Vessel Product Recovery Tool",
      maxPerLoad: 1,
      numInLoad: "N/A",
      numTrayDisplaced: 1,
    },
  ];

  return (
    <div className="basic-table-container ag-theme-alpine">
      <AgGridReact rowData={rowData} defaultColDef={{ flex: 1 }}>
        <AgGridColumn headerName="Top Shelf-Restricted Equipment">
          <AgGridColumn headerName="Ref." field="ref" editable />
          <AgGridColumn headerName="Description" field="description" editable />
          <AgGridColumn headerName="Max/Load" field="maxPerLoad" editable />
          <AgGridColumn
            headerName="# in Load"
            field="numInLoad"
            editable
            checkboxSelection={(row) => row.data.numInLoad === "N/A"}
          />
          <AgGridColumn
            headerName="# Trays Displaced"
            field="numTrayDisplaced"
            editable
          />
        </AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default BasicTable;
