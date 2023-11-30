import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCards } from "../API/getCards";

const initialState = {
  cards: [],
  loading: false,
  error: "",
  offset: undefined,
  isShowBtn: true,
  isAdd: false,
  subLoading: false,
  subError: "",
};

export const fetchCard = createAsyncThunk(
  "catalog/fetchCard",
  async (params) => {
    const { categoryId, offset } = params;
    const response = await getCards(categoryId, offset);
    return response.data;
  }
);

export const catalogCardsSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    updateIsAdd: (state) => {
      state.isAdd = true;
    },
    resetCards: (state) => {
      state.cards = [];
      state.isShowBtn = true;
      state.loading = false;
      state.error = "";
      state.offset = undefined;
      state.subError = "";
      state.subLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        if(state.cards.length === 0) {
            state.loading = true;
            state.error = "";
        } else {
            state.subLoading = true
        }
   
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        if (state.isAdd === false) {
          state.cards = action.payload;
        } else {
          if (action.payload.length === 0) {
            state.isShowBtn = false;
          }
          state.cards = [...state.cards, ...action.payload];
          state.subLoading = false
        }
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCard.rejected, (state, action) => {
        console.log("Error:", action.payload);
        state.loading = false;

        if (action.payload instanceof Error) {
          state.error = action.payload.message;
        } else if (typeof action.payload === "string") {
          try {
            const errorData = JSON.parse(action.payload);
            if (errorData.message) {
              state.error = errorData.message;
            } else {
              state.error = "Произошла ошибка при загрузке.";
            }
          } catch (error) {
            state.error = "Произошла ошибка при загрузке.";
          }
        } else {
          state.error = "Произошла ошибка при загрузке.";
        }
      });
  },
});

export const { updateIsAdd , resetCards} = catalogCardsSlice.actions;
export default catalogCardsSlice.reducer;
