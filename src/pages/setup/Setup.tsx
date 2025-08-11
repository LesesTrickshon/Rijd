import { useRef } from "react";
import styles from "./Setup.module.css";

function Setup() {
  const car_typeRef = useRef<HTMLSelectElement>(null);
  const verbrauchRef = useRef<HTMLInputElement>(null);
  const save = () => {
    let car_type: string = String(car_typeRef.current?.value);
    let verbrauch: string = String(verbrauchRef.current?.value);

    // console.log(car_type);
    // console.log(verbrauch);

    localStorage.setItem("car_type", car_type);
    localStorage.setItem("verbrauch", verbrauch);

    if (
      localStorage.getItem("distance") === null ||
      localStorage.getItem("distance") === "0"
    ) {
      localStorage.setItem("distance", "0");
      localStorage.setItem("time", "0");
      localStorage.setItem("emmision", "0");
      localStorage.setItem("array", JSON.stringify([]));
      console.log("No User Data found. Created new Variables");
    }

    window.location.href = "/main";
  };

  return (
    <>
      <div className={styles.top}>
        <h1>Rijd</h1>
        <h3>Trage deine Auto und Fahrdaten ein</h3>
      </div>
      <div className={styles.container}>
        <h2>Fahrzeugtyp</h2>

        <select name="car-option" id="car-option" ref={car_typeRef}>
          <option value="benzin">Benzin</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Plug-In Hybrid</option>
          <option value="elektrisch">Elektrisch</option>
        </select>

        <h2>Verbrauch (L÷100km)</h2>
        <input id="verbrauch" type="number" placeholder="L÷100km" ref={verbrauchRef} />
      </div>

      <div className={styles.button_box}>
        <button onClick={() => save()} className={styles.button}>
          Fertig
        </button>
      </div>
    </>
  );
}

export default Setup;
