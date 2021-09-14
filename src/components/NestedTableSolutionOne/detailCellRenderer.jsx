import React from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { AllModules } from "ag-grid-enterprise";

const DetailCellRenderer = ({ data, node, api }) => {
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
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
        modules={AllModules}
      >
        <AgGridColumn headerName="Tray #1">
          <AgGridColumn field="ref" headerName="Ref." />
          <AgGridColumn field="quantity" headerName="Total Quantity" />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
        modules={AllModules}
      >
        <AgGridColumn headerName="Tray #2">
          <AgGridColumn field="ref" headerName="Ref." />
          <AgGridColumn field="quantity" headerName="Total Quantity" />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
        modules={AllModules}
      >
        <AgGridColumn headerName="Tray #3">
          <AgGridColumn field="ref" headerName="Ref." />
          <AgGridColumn field="quantity" headerName="Total Quantity" />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="full-width-grid ag-theme-alpine"
        rowData={rowData}
        modules={AllModules}
      >
        <AgGridColumn headerName="Tray #4">
          <AgGridColumn field="ref" headerName="Ref." />
          <AgGridColumn field="quantity" headerName="Total Quantity" />
        </AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default DetailCellRenderer;
