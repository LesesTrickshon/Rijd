import TabBar from "../../components/tabbar";
import styles from "./book.module.css";
import { useState } from "react";

function Book() {
  const [array, _setArray] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem("array");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  return (
    <>
      <button
        id="add"
        className={styles.add}
        onClick={() => {
          window.location.href = "/new-ride";
        }}
      >
        <h2>+</h2>
      </button>

      <div className="top">
        <h1>Logbuch Einträge</h1>
      </div>

      <div className={styles.search_bar}>
        <input type="text" placeholder="Suche..." id="search-bar" />
      </div>

      <li className={styles.container}>
        {array.map((content) => (
          <span key={content.id} className={styles.info}>
            <p>Datum: {content.date}</p>
            <p>Strecke: {content.distance}</p>
            <p>Start Fahrt: {content.start}</p>
            <p>Ende Fahrt: {content.end}</p>
          </span>
        ))}
      </li>
      <TabBar />
    </>
  );
}

export default Book;
