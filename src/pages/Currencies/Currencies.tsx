import React from "react";

// Redux
import { useSelector } from "../../redux/typedHooks";
// Redux

// Types
import { TResults } from "../../redux/types/currencies";
// Types

// Styles
import styles from "./Currencies.module.css";
// Styles

type TCurrencyObj = {
  [key: string]: number;
};

const Currencies = () => {
  const { basedCurrency, currencies } = useSelector((state) => state.currency);
  const [results, setResults] = React.useState<Array<TCurrencyObj>>([]);

  React.useEffect(() => {
    const results: TResults | undefined = currencies && currencies.results;
    let resultsArr: Array<TCurrencyObj> = [];

    for (let key in results) {
      let currencyObj: TCurrencyObj = {
        [key]: results[key],
      };
      resultsArr.push(currencyObj);
    }

    setResults(resultsArr);
  }, [currencies]);

  return (
    <section className={styles.currencies}>
      <div className={styles.container}>
        {results.map((currency: any, index: number) => {
          let currencyValue = "";
          for (let key in currency) {
            currencyValue = key;
          }
          return (
            <p className={styles.currency} key={index}>
              1 {basedCurrency} = {currency[currencyValue] * 1} {currencyValue}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Currencies;
