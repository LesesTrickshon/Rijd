import styles from "./Main.module.css";
import { useEffect } from "react";
import TabBar from "../../components/tabbar";
function Main() {
  const clear: any[] = [];

  useEffect(() => {
    if (localStorage.getItem("array") === null) {
      localStorage.setItem("array", JSON.stringify(clear));
    }

    const array = JSON.parse(localStorage.getItem("array"));

    let streckeTotal = 0;
    for (let i = 0; i < array.length; i++) {
      streckeTotal += Number(array[i][1]);
    }
    document.getElementById(
      "distance"
    ).innerHTML = `Gefahrene Strecke: ${streckeTotal}km`;
  }, []);
  return (
    <>
      <div className={styles.top}>
        <h1>Info</h1>
      </div>

      <div className={styles.info}>
        <p id="distance">Total distance: ⚠︎km</p>
        <p id="time">Time spent on Road: ⚠︎kg</p>
        <p id="emmision">Carbon emmision: ⚠︎km</p>
      </div>

      <TabBar />
    </>
  );
}

export default Main;
