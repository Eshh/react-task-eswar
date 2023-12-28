import "./App.css";
import TableComponent from "./components/table.component";

function App() {
  return (
    <>
      <h2>Flavanoids Stats</h2>
      <TableComponent flag="Flavanoids" />
      <h2>Gamma Stats</h2>
      <TableComponent flag="Gamma" />
    </>
  );
}

export default App;
