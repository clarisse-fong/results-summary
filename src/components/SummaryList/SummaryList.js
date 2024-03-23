import ContinueButton from "./ContinueButton";
import data from "../data/data.json";

function SummaryList() {
  return (
    <div className="summary-list">
      <h1>Summary</h1>
      {data.map((d) => {
        return (
          <div className={`p-2 row flex-fill border rounded ${d.category}`}>
            <img src={d.icon} className="col-2"></img>
            <p className="col">{d.category}</p>
            <p className="col ">{d.score} / 100</p>
          </div>
        );
      })}

      <ContinueButton />
    </div>
  );
}

export default SummaryList;
