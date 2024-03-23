import ResultCircle from "./ResultCircle";

function YourResult() {
  return (
    <div className="yourResult">
      <h1>Your Result</h1>
      <ResultCircle />
      <h2>Great</h2>
      <p id="result_description">
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </div>
  );
}

export default YourResult;
