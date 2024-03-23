import "./App.css";
import SummaryList from "./components/SummaryList/SummaryList";
import YourResult from "./components/Your Result/YourResult";

function App() {
  return (
    <>
      <div>
        <div>
          <div>
            <YourResult />
            <SummaryList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
