import TabBar from "../../components/tabbar";
import "./tracker.module.css";

function Tracker() {
  return (
    <>
      <div className="top">
        <h1>Zähler</h1>
      </div>

      <div className="tracker-button-container">
        <button className="tracker-button">
          <h1>Toggle</h1>
        </button>
      </div>

      <div className="info">
        <h1>Statistik</h1>
        <p>Strecke</p>
        <p>Fahrzeit</p>
        <p>C02 Außstoß</p>
      </div>
      <TabBar />
    </>
  );
}

export default Tracker;
