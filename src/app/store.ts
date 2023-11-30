import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cardsSlice } from "../modules/TopSales";
import { categoriesSlice } from "../modules/Categories";
import { catalogCardsSlice } from "../modules/CatalogModule";


export const store = configureStore({
  reducer: {
    cardsTopSales: cardsSlice.reducer,
    categories: categoriesSlice.reducer,
    catalogCards: catalogCardsSlice.reducer
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
