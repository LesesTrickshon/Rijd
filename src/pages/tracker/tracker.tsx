import { useEffect, useState } from "react";
import TabBar from "../../components/tabbar";
import styles from "./tracker.module.css";
import { TiLocation } from "react-icons/ti";
import { success } from "./location";
import { push } from "./push.ts";
import { haversine } from "./haversine.ts";

function Tracker() {
  const [main_button_toggle, setMainButtonToggle] = useState(false);
  const [driving_text, setDriving_text] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [places, setPlaces] = useState([]) as any[];
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [length, setLength] = useState(0);

  useEffect(() => {
    let intervalID: any;

    const time = () => {
      const currentTime: Date = new Date();
      return `${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}`;
    };

    const options = {
      enableHighAccuracy: true,
    };

    const Coords = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            success(position, setLat, setLon, setPlaces);
          },
          () => {
            alert("Could not pull location info");
          },
          options,
        );
      }
    };

    if (main_button_toggle) {
      setDriving_text("🔴 Recording");
      setStart(time());
      Coords();
      intervalID = setInterval(() => {
        Coords();
      }, 1000);
    } else {
      // Button turned to false
      setEnd(time());
      if (places.length !== 0) {
        push(places, start, end);
      }
      setPlaces([]);
      setDriving_text("");
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [main_button_toggle]);

  useEffect(() => {
    console.log(places);

    if (places.length < 2) {
      setLength(0);
      return;
    }

    let totalLength = 0;
    for (let i = 0; i < places.length - 1; i++) {
      totalLength += haversine(
        places[i].lat,
        places[i].lon,
        places[i + 1].lat,
        places[i + 1].lon,
      );
    }

    setLength(totalLength);
  }, [places]);

  return (
    <>
      <div className="top">
        <h1>Zähler</h1>
      </div>

      <button
        className={styles.tracker}
        onClick={() => {
          setMainButtonToggle(!main_button_toggle);
        }}
      >
        <TiLocation />
      </button>

      <h1 className={styles.driving_tag}>{driving_text}</h1>

      <div className={styles.info}>
        <h1>Statistik</h1>
        <p>Strecke: {length}</p>
        <p>Lat: {lat}</p>
        <p>Long: {lon}</p>
        {/*<p>Fahrzeit</!p>
        <p>C02 Außstoß</p>*/}
      </div>
      <TabBar />
    </>
  );
}

export default Tracker;
