import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import TabBar from "../../components/tabbar";
function Main() {
  const clear: any[] = [];
  const [distance, setDistance] = useState("Total distance: ⚠️km");

  useEffect(() => {
    // Wenn array nicht exsistiert wird er kreiert
    if (localStorage.getItem("array") === null) {
      localStorage.setItem("array", JSON.stringify(clear));
    }

    const array = JSON.parse(localStorage.getItem("array") ?? "");

    let streckeTotal = 0;
    for (let i = 0; i < array.length; i++) {
      streckeTotal += Number(array[i].distance);
    }
    setDistance(`Gefahrene Strecke: ${streckeTotal}km`);
  }, []);
  return (
    <>
      <div className={styles.top}>
        <h1>Info</h1>
      </div>

      <div className={styles.info}>
        <p>{distance}</p>
        <p id="time">Time spent on Road: ⚠︎kg</p>
        <p id="emmision">Carbon emmision: ⚠︎km</p>
      </div>

      <TabBar />
    </>
  );
}

export default Main;
