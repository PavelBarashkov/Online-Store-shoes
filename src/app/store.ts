import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cardsSlice } from "../modules/TopSales";
import { catalogSlice } from "../modules/Catalog";
import { headerSlice } from "../modules/Header";
import { cardSlice } from "../modules/CardInfo";
import basketSlice from "../slices/basketSlice";


export const store = configureStore({
  reducer: {
    cardsTopSales: cardsSlice.reducer,
    catalog: catalogSlice.reducer,
    header: headerSlice.reducer,
    cardInfo: cardSlice.reducer,
    basket: basketSlice
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
