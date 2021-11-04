import { store } from "./store";
import { TCurrenciesActions } from "./actions/currencies";

import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions = TCurrenciesActions;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;
