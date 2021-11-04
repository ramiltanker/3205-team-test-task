// Styles
import styles from "./Header.module.css";
// Styles

// Components
import NavMenu from "../NavMenu/NavMenu";
import ChangeBaseCurrency from "../ChangeBaseCurrency/ChangeBaseCurrency";
// Components

const Header = () => {
  return (
    <header className={styles.header}>
      <NavMenu />
      <ChangeBaseCurrency />
    </header>
  );
};

export default Header;
