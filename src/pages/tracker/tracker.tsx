import TabBar from "../../components/tabbar";
import styles from "./tracker.module.css";
import { TiLocation } from "react-icons/ti";

function Tracker() {
  return (
    <>
      <div className="top">
        <h1>Zähler</h1>
      </div>

      <button className={styles.tracker}><TiLocation /></button>

      <div className={styles.info}>
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
