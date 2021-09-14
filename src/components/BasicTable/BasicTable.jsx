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
      numInLoad: null,
      numTrayDisplaced: 2,
    },
    {
      ref: "C",
      description: "CUNO Flex Hose",
      maxPerLoad: 2,
      numInLoad: null,
      numTrayDisplaced: 2,
    },
    {
      ref: "D",
      description: "PVDF (Harvest) Wand",
      maxPerLoad: 1,
      numInLoad: null,
      numTrayDisplaced: 2,
    },
    {
      ref: "K",
      description: "Vessel Product Recovery Tool",
      maxPerLoad: 1,
      numInLoad: null,
      numTrayDisplaced: 1,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1200 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn headerName="Top Shelf-Restricted Equipment" />
        <AgGridColumn headerName="Ref." field="ref" />
        <AgGridColumn headerName="Description" field="description" />
        <AgGridColumn headerName="Max/Load" field="maxPerLoad" />
        <AgGridColumn headerName="# in Load" field="numInLoad" />
        <AgGridColumn headerName="# Trays Displaced" field="numTrayDisplaced" />
      </AgGridReact>
    </div>
  );
};

export default BasicTable;
