import { Link } from "react-router-dom";

// Styles
import styles from "./NavMenu.module.css";
// Styles

const NavMenu = () => {
  return (
    <nav className={styles.nav_menu}>
      <Link to="/converter" className={styles.link}>
        Конвертер
      </Link>
      <Link to="/currencies" className={styles.link}>
        Валюты
      </Link>
    </nav>
  );
};

export default NavMenu;
