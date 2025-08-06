import { useEffect } from "react";
import styles from "./Start.module.css";

// Page Imports:

function Start() {
  const open_page = () => {
    if (localStorage.getItem("distance") === null) {
      window.location.href = "/setup";
    } else {
      window.location.href = "/main";
    }
  };

  useEffect(() => {
    if (localStorage.getItem("distance") !== null) {
      window.location.href = "/main";
    }
  }, []);

  return (
    <>
      <div className={styles.top}>
        <h1>Rijd React</h1>
      </div>
      <div className={styles.button_box}>
        <button
          className={styles.setup}
          id="button"
          onClick={() => open_page()}
        >
          Start SetUp
        </button>
      </div>
      <div className={styles.img_container}>
        <img src="/src/assets/logo.png" />
      </div>
    </>
  );
}

export default Start;
