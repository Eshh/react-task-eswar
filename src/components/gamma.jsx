import { calculateMeanMedianMode } from "../utils/util";

const Gamma = () => {
  const data = calculateMeanMedianMode("Gamma");
  const tableData = ["Gamma Mean", "Gamma Median", "Gamma Mode"];
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data).map((e) => {
            return <th>{e}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((e, i) => {
          return (
            <tr>
              <td>{tableData[i]}</td>
              <td>{data[e].mean}</td>
              <td>{data[e].median}</td>
              <td>{data[e].mode}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Gamma;
