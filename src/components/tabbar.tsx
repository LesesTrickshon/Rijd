import styles from "./tabbar.module.css";
import { TiHomeOutline, TiLocationOutline, TiBookmark, TiCogOutline } from "react-icons/ti";

function TabBar() {
  return (
    <div className={styles.tabbar}>
      <a href="/main"><TiHomeOutline /></a>
      <a href="/tracker"><TiLocationOutline /></a>
      <a href="/book"><TiBookmark /></a>
      <a href="/settings"><TiCogOutline /></a>
    </div>
  );
}

export default TabBar;
