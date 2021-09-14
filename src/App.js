import React from "react";
import BasicTable from "./components/BasicTable";
import NestedTableSolutionOne from "./components/NestedTableSolutionOne";
import MoreComplexTable from "./components/MoreComplexTable";

function App() {
  return (
    <>
      <h1>Basic Table</h1>
      <BasicTable />
      <h1>Nested Table</h1>
      <NestedTableSolutionOne />
      <h1>More Complex Table</h1>
      <MoreComplexTable />
    </>
  );
}

export default App;
