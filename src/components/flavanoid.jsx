import { calculateMeanMedianMode } from "../utils/util";

const Flavanoid = () => {
  const data = calculateMeanMedianMode("Flavanoids");
  const tableData = ['Flavanoids Mean','Flavanoids Median','Flavanoids Mode']
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(data).map((e) => {
            return <th>{e}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((e,i) => {
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

export default Flavanoid;
