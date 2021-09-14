import React from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";

const DetailCellRenderer = ({ data, node, api }) => {
  const rowDataBulkInfo = [{}];
  const rowDataOperatorInfo = [{}];
  const rowDataSampleInfo = [
    {
      type: "B1",
      sampleNum: null,
      exportBox: null,
      operatorOne: null,
      OperatorTwo: null,
      operatorThree: null,
    },
    {
      type: "M1",
      sampleNum: null,
      exportBox: null,
      operatorOne: null,
      OperatorTwo: null,
      operatorThree: null,
    },
    {
      type: "E1",
      sampleNum: null,
      exportBox: null,
      operatorOne: null,
      OperatorTwo: null,
      operatorThree: null,
    },
  ];

  return (
    <div className="full-width-panel-column">
      <AgGridReact
        className="more-complex-table-panel-inner ag-theme-alpine"
        defaultColDef={{ flex: 1 }}
        rowData={rowDataBulkInfo}
      >
        <AgGridColumn
          field="bulkBatchNumber"
          headerName="Bulkbatchnummber"
          editable
        />
        <AgGridColumn
          field="materialNumber"
          headerName="Materiaalnummer"
          editable
        />
        <AgGridColumn field="expiryDate" headerName="Expiry Date" editable />
      </AgGridReact>

      <AgGridReact
        className="more-complex-table-panel-inner ag-theme-alpine"
        defaultColDef={{ flex: 1 }}
        rowData={rowDataOperatorInfo}
      >
        <AgGridColumn headerName="Bulkbatchnummer met oudste Expiry date gecontroleerd">
          <AgGridColumn headerName="Paraaf/Datum operator 1" editable />
          <AgGridColumn headerName="Paraaf/Datum operator 2" editable />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="more-complex-table-panel-inner ag-theme-alpine"
        defaultColDef={{ flex: 1 }}
        rowData={rowDataSampleInfo}
      >
        <AgGridColumn headerName="Monster Type en #" field="type" />
        <AgGridColumn headerName="Aantal monsters" field="sampleNum" editable />
        <AgGridColumn headerName="Exportdoos #" field="exportBox" editable />
        <AgGridColumn
          headerName="Paraaf/Datum operator 1"
          field="operatorOne"
          editable
        />
        <AgGridColumn
          headerName="Paraaf/Datum operator 2"
          field="operatorTwo"
          editable
        />
      </AgGridReact>

      <AgGridReact
        className="more-complex-table-panel-inner ag-theme-alpine"
        defaultColDef={{ flex: 1 }}
        rowData={rowDataOperatorInfo}
      >
        <AgGridColumn headerName="Lijn leeg gedraaid /vrij van tabletten/tabletafval">
          <AgGridColumn headerName="Paraaf/Datum operator 1" editable />
          <AgGridColumn headerName="Paraaf/Datum operator 2" editable />
        </AgGridColumn>
      </AgGridReact>

      <AgGridReact
        className="more-complex-table-panel-inner ag-theme-alpine"
        defaultColDef={{ flex: 1 }}
        rowData={rowDataOperatorInfo}
      >
        <AgGridColumn headerName="Voorvak leeg">
          <AgGridColumn headerName="Paraaf/Datum operator 1" editable />
          <AgGridColumn headerName="Paraaf/Datum operator 2" editable />
        </AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default DetailCellRenderer;
