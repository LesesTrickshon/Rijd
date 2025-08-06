import TabBar from "../../components/tabbar";
import styles from "./settings.module.css";
import { useEffect } from "react";

function Settings() {
  let clear: any[] = [];

  useEffect(() => {
    document.getElementById("verbrauch").value =
      localStorage.getItem("verbrauch");
  }, []);

  const Reset_Data = () => {
    if (confirm("You are removing all your booked Data!")) {
      localStorage.setItem("distance", 0);
      localStorage.setItem("time", 0);
      localStorage.setItem("emmision", 0);
      localStorage.setItem("array", JSON.stringify(clear));
    }
  };

  const RM_Data = () => {
    if (confirm("You are forcefully removing all of your Data!")) {
      localStorage.removeItem("distance");
      localStorage.removeItem("time");
      localStorage.removeItem("emmision");
      localStorage.removeItem("car-option");
      localStorage.removeItem("verbrauch");
      localStorage.removeItem("array");

      window.location.href = "/setup";
    }
  };

  const save = () => {
    let car_type = document.getElementById("car-option").value;
    let verbrauch = document.getElementById("verbrauch").value;
    console.log(car_type);
    console.log(verbrauch);
    localStorage.setItem("car_type", car_type);
    localStorage.setItem("verbrauch", verbrauch);
  };

  return (
    <>
      <div className="top">
        <h1>Einstellungen</h1>
      </div>

      <div className={styles.container}>
        <h2>Fahrzeugtyp</h2>

        <select name="car-option" id="car-option">
          <option value="benzin">Benzin</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Plug-In Hybrid</option>
          <option value="elektrisch">Elektrisch</option>
        </select>

        <h2>Verbrauch (L÷100km)</h2>
        <input
          id="verbrauch"
          type="number"
          placeholder="L÷100km"
          className={styles.verbrauch}
        />

        <div className={styles.delete}>
          <h2>Daten Löschen</h2>
          <button
            onClick={() => {
              Reset_Data();
            }}
          >
            Clear localStorage
          </button>
          <button
            onClick={() => {
              RM_Data();
            }}
          >
            Remove localStorage Key
          </button>
        </div>
      </div>
      <TabBar />
    </>
  );
}

export default Settings;
