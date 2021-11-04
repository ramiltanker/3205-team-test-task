import { AppThunk } from "../types";

// Types
import { TCurrencies } from "../types/currencies";
// Types

// Api
import getCurrencies from "../../api/getCurrencies";
// Api

export const SET_DEFAULT_BASE_CURRENCY: "SET_DEFAULT_BASE_CURRENCY" =
  "SET_DEFAULT_BASE_CURRENCY";

export const GET_CURRENCIES_REQUEST: "GET_CURRENCIES_REQUEST" =
  "GET_CURRENCIES_REQUEST";
export const GET_CURRENCIES_FAILED: "GET_CURRENCIES_FAILED" =
  "GET_CURRENCIES_FAILED";
export const GET_CURRENCIES_SUCCESS: "GET_CURRENCIES_SUCCESS" =
  "GET_CURRENCIES_SUCCESS";

interface ISetDefaultBaseCurrency {
  readonly type: typeof SET_DEFAULT_BASE_CURRENCY;
  basedCurrency: string;
}

interface IGetCurrenciesRequest {
  readonly type: typeof GET_CURRENCIES_REQUEST;
}

interface IGetCurrenciesFailed {
  readonly type: typeof GET_CURRENCIES_FAILED;
}

interface IGetCurrenciesSuccess {
  readonly type: typeof GET_CURRENCIES_SUCCESS;
  currencies: TCurrencies;
}

export type TCurrenciesActions =
  | ISetDefaultBaseCurrency
  | IGetCurrenciesRequest
  | IGetCurrenciesFailed
  | IGetCurrenciesSuccess;

export const handleGetCurrencies: AppThunk = (
  from: string,
  one: string,
  two: string
) => {
  return async (dispatch) => {
    dispatch({
      type: GET_CURRENCIES_REQUEST,
    });
    getCurrencies(from)
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_CURRENCIES_SUCCESS,
            currencies: res,
          });
        } else {
          console.log(res);
          dispatch({
            type: GET_CURRENCIES_FAILED,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_CURRENCIES_FAILED,
        });
        console.log(error);
      });
  };
};
