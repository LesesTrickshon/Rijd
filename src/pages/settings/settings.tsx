import TabBar from "../../components/tabbar";
import styles from "./settings.module.css";
import { useEffect, useRef } from "react";
import { TiPrinter, TiExportOutline, TiDownloadOutline } from "react-icons/ti";

function Settings() {
  let clear: any[] = [];
  const verbrauchRef = useRef<HTMLInputElement>(null);
  const car_typeRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (verbrauchRef.current) {
      verbrauchRef.current.value = localStorage.getItem("verbrauch") ?? "";
    }
  }, []);

  const Reset_Data = () => {
    if (confirm("You are removing all your booked Data!")) {
      localStorage.setItem("distance", "0");
      localStorage.setItem("time", "0");
      localStorage.setItem("emmision", "0");
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
    let car_type: string = String(car_typeRef.current?.value);
    let verbrauch: string = String(verbrauchRef.current?.value);
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
        <div className={styles.info}>
         <h2>Fahrzeugtyp</h2>

          <select name="car-option" id="car-option" ref={car_typeRef}>
            <option value="benzin">Benzin</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Plug-In Hybrid</option>
            <option value="elektrisch">Elektrisch</option>
          </select> 
        </div>

        <div className={styles.info}>
          <h2>Verbrauch (L÷100km)</h2>
          <input
            id="verbrauch"
            type="number"
            placeholder="L÷100km"
            className={styles.verbrauch}
            ref={verbrauchRef}
          />
        </div>

        <div className={styles.info}>
          <h2>Daten Löschen</h2>
          <div className={styles.info_d_buttons}>
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

        <div className={styles.info}>
          <h2>JSON Daten</h2>
          <div className={styles.info_e_buttons}>
            <a
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(JSON.parse(localStorage.getItem("array") ?? ""), null, 2) // null, 2 für schöne Formatierung
              )}`}
              download="rijd-data.json"
            >
              <TiExportOutline />
            </a>
            <button><TiDownloadOutline /></button>
          </div>
          
          </div>
          <div className={styles.info}>
            <h2>Version</h2>
            <div className={styles.version_container}>
              <h3>Alpha 0.4</h3>
              <img src="/src/assets/react.svg" style={{ width: '30px', padding: "10px"}} />
            </div>
            
          </div>

          <button className={styles.save} onClick={() => {save();} }><TiPrinter /></button>

          <div style={{height: '500px'}}/>
      </div>
      <TabBar />
    </>
  );
}

export default Settings;
