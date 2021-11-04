import React from "react";

// Styles
import styles from "./Converter.module.css";
// Styles

// Types
import { TResults } from "../../redux/types/currencies";
// Types

// Redux
import { useSelector } from "../../redux/typedHooks";
// Redux

// Custom Hooks
import { useFormWithValidation } from "../../customHooks/FormValidation";
// Custom Hooks

// Components
import InputString from "../../components/InputString/InputString";
import Button from "../../components/Button/Button";
// Components

type TCurrencyObj = {
  [key: string]: number;
};

const Converter = () => {
  // Сумма после конвертации
  const [result, setResult] = React.useState<number>();
  //   Массив с курсами валют
  const [currenciesArr, setCurrenciesArr] = React.useState<Array<TCurrencyObj>>(
    []
  );
  //   Валюта в которую конвертируют
  const [currencyTo, setCurrencyTo] = React.useState<string>("");
  //   Сумма валюты для конвертации
  const [valueOfCurrency, setValueOfCurrency] = React.useState<string>("");

  const { currencies, basedCurrency } = useSelector((store) => store.currency);

  const input = useFormWithValidation();

  React.useEffect(() => {
    const results: TResults | undefined = currencies && currencies.results;
    let resultsArr: Array<TCurrencyObj> = [];

    for (let key in results) {
      let currencyObj: TCurrencyObj = {
        [key]: results[key],
      };
      resultsArr.push(currencyObj);
    }

    setCurrenciesArr(resultsArr);
  }, [currencies]);

  React.useEffect(() => {
    let currency: string = "";
    let number: string = "";

    let inputArr =
      input.values.convert && input.values.convert.match!(/in ([^ ]*)/);

    if (inputArr && inputArr !== null) {
      currency = inputArr[1];
    }

    let numberArr = input.values.convert && input.values.convert.match(/\d+/g);

    if (numberArr && numberArr !== null) {
      number = numberArr[0];
    }

    setValueOfCurrency(number);
    setCurrencyTo(currency.toUpperCase());
  }, [input.values.convert]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let resultSumm: number = 0;
    currenciesArr.forEach((currency) => {
      for (let key in currency) {
        if (currencyTo === key)
          resultSumm = currency[key] * Number(valueOfCurrency);
      }
      setResult(resultSumm);
    });
  };

  return (
    <section className={styles.converter}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputString
          inputName="convert"
          inputType="text"
          inputId="convert"
          labelText="Конвертация"
          inputWidth="600px"
          inputValue={input.values.convert || ""}
          onChange={input.handleChange}
          inputPlaceholder={`15 ${
            basedCurrency === "USD" ? "usd" : "rub"
          } in  ${basedCurrency === "USD" ? "rub" : "usd"}`}
        />
        <Button
          text="Конвертировать"
          width="200px"
          height="50px"
          marginTop="30px"
        />
      </form>
      <p className={styles.result}>{result}</p>
    </section>
  );
};

export default Converter;
