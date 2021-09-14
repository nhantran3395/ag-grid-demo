import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import DetailCellRenderer from "./detailCellRenderer.jsx";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const MoreComplexTable = () => {
  const rowDataBatch = [{}];
  const rowDataBulk = [
    { bulk: "Bulk 1" },
    { bulk: "Bulk 2" },
    { bulk: "Bulk 3" },
    { bulk: "Bulk 4" },
    { bulk: "Bulk 5" },
  ];

  return (
    <div className="more-complex-table-container">
      <div className="more-complex-table-batch ag-theme-alpine">
        <AgGridReact rowData={rowDataBatch} defaultColDef={{ flex: 1 }}>
          <AgGridColumn headerName="Monstername Multi Batching SP33">
            <AgGridColumn
              headerName="Figo batchnummer"
              field="batchNumber"
              width={300}
              editable
            />
            <AgGridColumn
              headerName="Figo materiaalnummer"
              field="materialNumber"
              width={300}
              editable
            />
            <AgGridColumn
              headerName="Datum"
              field="date"
              width={300}
              editable
            />
          </AgGridColumn>
        </AgGridReact>
      </div>

      <div className="more-complex-table-bulk ag-theme-alpine">
        <AgGridReact
          defaultColDef={{ flex: 1 }}
          masterDetail={true}
          detailCellRenderer={"myDetailCellRenderer"}
          frameworkComponents={{ myDetailCellRenderer: DetailCellRenderer }}
          rowData={rowDataBulk}
        >
          <AgGridColumn
            headerName="Bulks"
            field="bulk"
            cellRenderer="agGroupCellRenderer"
          />
        </AgGridReact>
      </div>
    </div>
  );
};

export default MoreComplexTable;
