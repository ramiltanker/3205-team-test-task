// Styles
import styles from "./ChangeBaseCurrency.module.css";
// Styles

// Redux
import { SET_DEFAULT_BASE_CURRENCY } from "../../redux/actions/currencies";
import { useDispatch } from "../../redux/typedHooks";
// Redux

// Components
import Button from "../Button/Button";
// Components

const ChangeBaseCurrency = () => {
  const dispatch = useDispatch();

  const handleSetUSD = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: SET_DEFAULT_BASE_CURRENCY, basedCurrency: "USD" });
  };

  const handleSetRUB = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: SET_DEFAULT_BASE_CURRENCY, basedCurrency: "RUB" });
  };

  return (
    <div className={styles.box}>
      <button
        className={styles.button}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleSetUSD(e)
        }
      >
        USD
      </button>
      <button
        className={styles.button}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleSetRUB(e)
        }
      >
        RUB
      </button>
    </div>
  );
};

export default ChangeBaseCurrency;
