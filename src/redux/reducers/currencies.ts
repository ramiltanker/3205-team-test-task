import {
  SET_DEFAULT_BASE_CURRENCY,
  GET_CURRENCIES_REQUEST,
  GET_CURRENCIES_FAILED,
  GET_CURRENCIES_SUCCESS,
} from "../actions/currencies";

// Types
import { TCurrencies } from "../types/currencies";
// Types

// Union тип
import { TCurrenciesActions } from "../actions/currencies";
// Union тип

type TCurrenciesReducer = {
  basedCurrency: string;
  currencies?: TCurrencies;

  isGetCurencyRequest: boolean;
  isGetCurencyFailed: boolean;
  isGetCurencySuccess: boolean;
};

export const initialState: TCurrenciesReducer = {
  basedCurrency: "",
  currencies: undefined,

  isGetCurencyRequest: false,
  isGetCurencyFailed: false,
  isGetCurencySuccess: false,
};

export const currenciesReducer = (
  state = initialState,
  action: TCurrenciesActions
) => {
  switch (action.type) {
    case SET_DEFAULT_BASE_CURRENCY: {
      return {
        ...state,
        basedCurrency: action.basedCurrency,
      };
    }
    case GET_CURRENCIES_REQUEST: {
      return {
        ...state,
        isGetCurencyRequest: true,
        isGetCurencyFailed: false,
        isGetCurencySuccess: false,
      };
    }
    case GET_CURRENCIES_FAILED: {
      return {
        ...state,
        isGetCurencyRequest: false,
        isGetCurencyFailed: true,
        isGetCurencySuccess: false,
      };
    }
    case GET_CURRENCIES_SUCCESS: {
      return {
        ...state,
        currencies: action.currencies,
        isGetCurencyRequest: false,
        isGetCurencyFailed: false,
        isGetCurencySuccess: true,
      };
    }

    default: {
      return state;
    }
  }
};
