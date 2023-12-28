import { calculateMeanMedianMode, tableDataFormatter } from "../utils/util";

const TableComponent = ({ flag }) => {
  const { data, tData } = tableDataFormatter(calculateMeanMedianMode(flag));
  const { means, medians, modes } = tData;
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(data).map((e, i) => {
            return <th key={i}>{e}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{flag} Mean</td>
          {means.map((e, i) => {
            return (
              <>
                <td key={i}>{e}</td>
              </>
            );
          })}
        </tr>
        <tr>
          <td>{flag} Median</td>
          {medians.map((e, i) => {
            return (
              <>
                <td key={i}>{e}</td>
              </>
            );
          })}
        </tr>
        <tr>
          <td>{flag} Mode</td>
          {modes.map((e, i) => {
            return (
              <>
                <td key={i}>{e}</td>
              </>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
