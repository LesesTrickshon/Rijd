import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import TabBar from "../../components/tabbar";
function Main() {
  const clear: any[] = [];
  const [distance, setDistance] = useState(0);
  const [emission, setEmission] = useState(0);
  const [timeSpent, setTimeSpent] = useState("");

  useEffect(() => {
    // Wenn array nicht exsistiert wird er kreiert
    if (localStorage.getItem("array") === null) {
      localStorage.setItem("array", JSON.stringify(clear));
    }

    const array = JSON.parse(localStorage.getItem("array") ?? "");

    // Distance Calc
    let streckeTotal: number = 0;
    for (let i = 0; i < array.length; i++) {
      streckeTotal += Number(array[i].distance);
    }
    setDistance(streckeTotal);

    // Time calc:
    let time_total: number = 0;

    // I was to stuipid to do this and stackoverflow has braindamage so the next part of the Time calc part is compleatly vibe-coded :(
    function getMinutes(timeStr: string): number {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return hours * 60 + minutes;
    }

    function formatHHMM(totalMinutes: number): string {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      // Pad with leading zero if needed
      const hh = String(hours).padStart(2, "0");
      const mm = String(minutes).padStart(2, "0");
      return `${hh}:${mm}`;
    }

    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        const start = getMinutes(array[i].start);
        const end = getMinutes(array[i].end);

        let diff = end - start;

        // Handle overnight (e.g. 23:30 → 01:15)
        if (diff < 0) {
          diff += 24 * 60;
        }

        time_total += diff;
      }
    }

    setTimeSpent(formatHHMM(time_total));

    // Emission Calc:
    let liter: number =
      streckeTotal * Number(localStorage.getItem("verbrauch"));
    // setEmission(liter);
    if (localStorage.getItem("car_type") == "benzin") {
      setEmission(liter * 2.34);
    } else if (localStorage.getItem("car_type") == "diesel") {
      setEmission(liter * 2.65);
    } else if (localStorage.getItem("car_type") == "elektrisch") {
      setEmission(0);
    }
  }, []);

  return (
    <>
      <div className={styles.top}>
        <h1>Info</h1>
      </div>

      <div className={styles.info}>
        <p>Gefahrene Strecke: {distance}km</p>
        <p id="time">Time spent on Road: {timeSpent} H</p>
        <p id="emmision">Carbon emmision: {emission.toFixed(1)}kg</p>
      </div>

      <TabBar />
    </>
  );
}

export default Main;
