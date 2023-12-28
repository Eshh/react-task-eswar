import "./App.css";
import Flavanoid from "./components/flavanoid";
import { useState } from "react";
import Gamma from "./components/gamma";
import { wineData } from "./data/Wine-Data";

function App() {
  const [tableView, setTableView] = useState(true);
  return (
    <>
      <h2>Flavanoids Stats</h2>
      <Flavanoid data={wineData} />
      <h2>Gamma Stats</h2>
      <Gamma data={wineData} />
    </>
  );
}

export default App;
