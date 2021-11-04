import React from "react";
import { Route, Switch } from "react-router-dom";

// Redux
import {
  SET_DEFAULT_BASE_CURRENCY,
  handleGetCurrencies,
} from "./redux/actions/currencies";
import { useDispatch, useSelector } from "./redux/typedHooks";
// Redux

// Components
import Converter from "./pages/Converter/Converter";
import Currencies from "./pages/Currencies/Currencies";
import Header from "./components/Header/Header";
// Components

function App() {
  const dispatch = useDispatch();

  const { basedCurrency } = useSelector((store) => store.currency);

  React.useEffect(() => {
    let language = window.navigator && window.navigator.language;
    language = language.substr(0, 2).toLowerCase();
    if (language === "ru")
      dispatch({ type: SET_DEFAULT_BASE_CURRENCY, basedCurrency: "RUB" });
    if (language === "en")
      dispatch({ type: SET_DEFAULT_BASE_CURRENCY, basedCurrency: "USD" });
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(handleGetCurrencies(basedCurrency));
  }, [basedCurrency, dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/converter">
          <Converter />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
      </Switch>
    </>
  );
}

export default App;
