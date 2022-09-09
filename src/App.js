import "./App.css";
// import { FilteringTable } from "./conponents/FilteringTable";
// import { BasicTable } from "./conponents/BasicTable";
// import { SortingTable } from "./conponents/SortingTable";
import { PaginationTable } from "./conponents/PaginationTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
