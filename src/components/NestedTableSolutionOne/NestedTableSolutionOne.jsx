import React from "react";
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
    <div className="nested-table-container ag-theme-alpine">
      <AgGridReact
        defaultColDef={{ flex: 1 }}
        masterDetail={true}
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
  );
};

export default NestedTableSolutionOne;
