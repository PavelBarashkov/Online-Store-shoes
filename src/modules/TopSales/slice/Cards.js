import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCards } from "../API/getCards"


const initialState = {
  cards: [],
  loading: false,
  error: "",
};

export const fetchCardTopSales = createAsyncThunk("CardTopSales/fetchCardTopSales", async () => {
    const response = await getCards();
    return response.data;
  
});

export const cardsSlice = createSlice({
  name: "cardsFavorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardTopSales.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCardTopSales.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCardTopSales.rejected, (state, action) => {
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

export const {} = cardsSlice.actions;
export default cardsSlice.reducer;
