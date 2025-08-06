import TabBar from "../../components/tabbar";
import styles from "./new-ride.module.css";
import { useState, useRef, useEffect } from "react";

function NewRide() {
  // Stores JSX <input /> input
  const dateRef = useRef<HTMLInputElement>(null);
  const distanceRef = useRef<HTMLInputElement>(null);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  // formated data

  // Local Storage
  const [array, setArray] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem("array");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Adds data object to the array
  const push = (
    data: any,
    //array: any[],
    setArray: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    setArray((prev: any[]) => [...prev, data]);
  };

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(array));
  }, [array]);

  return (
    <>
      <div className="top">
        <h1>Neuer Eintrag</h1>
      </div>

      <div className={styles.info}>
        <h2>Datum</h2>
        <input type="date" ref={dateRef} />
      </div>

      <div className={styles.info}>
        <h2>Strecke (km)</h2>
        <input type="number" placeholder="42KM" ref={distanceRef} />
      </div>

      <div className={styles.info}>
        <h2>Start Fahrt</h2>
        <input type="time" ref={startRef} />
      </div>

      <div className={styles.info}>
        <h2>Ende Fahrt</h2>
        <input type="time" ref={endRef} />
      </div>

      <div className={styles.button_container}>
        <button
          onClick={() => {
            if (
              dateRef.current?.value !== "" ||
              distanceRef.current?.value !== "" ||
              startRef.current?.value !== "" ||
              endRef.current?.value !== ""
            ) {
              const data = {
                date: dateRef.current?.value,
                distance: distanceRef.current?.value,
                start: startRef.current?.value,
                end: endRef.current?.value,
                id: array.length,
              };
              push(data, setArray);
              window.location.href = "/book";
            } else {
              alert("Nicht jedes Feld wurde ausgefüllt!");
            }
          }}
          className={styles.button}
        >
          Eintragen
        </button>
      </div>

      <div className={styles.spacer}></div>
      <TabBar />
    </>
  );
}

export default NewRide;
