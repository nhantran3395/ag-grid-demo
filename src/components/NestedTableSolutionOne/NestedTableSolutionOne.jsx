import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import DetailCellRenderer from "./detailCellRenderer.jsx";

const NestedTableSolutionOne = () => {
  const rowData = [
    { trayEquipment: "Top Cell Tray Equipment" },
    { trayEquipment: "Bottom Cell Tray Equipment" },
  ];

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <div className="example-wrapper">
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%",
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            defaultColDef={{ flex: 1 }}
            masterDetail={true}
            detailRowHeight={310}
            detailCellRenderer={"myDetailCellRenderer"}
            frameworkComponents={{ myDetailCellRenderer: DetailCellRenderer }}
            rowData={rowData}
          >
            <AgGridColumn
              field="trayEquipment"
              cellRenderer="agGroupCellRenderer"
            />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default NestedTableSolutionOne;
