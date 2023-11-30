import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cardsSlice } from "../modules/TopSales";
import { catalogSlice } from "../modules/Catalog";


export const store = configureStore({
  reducer: {
    cardsTopSales: cardsSlice.reducer,
    catalog: catalogSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
