import "./App.css";
import Flavanoid from "./components/flavanoid";
import { useState } from "react";
import Gamma from "./components/gamma";
import { wineData } from "./data/Wine-Data";

function App() {
  const [tableView, setTableView] = useState(true);
  return (
    <>
      <button onClick={() => setTableView(!tableView)}>
        {tableView ? "Calculate Gamma" : "Calculate Flavanoid"}
      </button>
      {tableView === true ? (
        <Flavanoid data={wineData} />
      ) : (
        <Gamma data={wineData} />
      )}
    </>
  );
}

export default App;
