import styles from "./tabbar.module.css";

function TabBar() {
  return (
    <div className={styles.tabbar}>
      <a href="/main">Main</a>
      <a href="/tracker">Tracker</a>
      <a href="/book">Book</a>
      <a href="/settings">Settings</a>
    </div>
  );
}

export default TabBar;
