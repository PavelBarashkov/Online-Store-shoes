import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCardInfo } from "../API/getCardInfo";

const initialState = {
  card: {},
  loading: false,
  error: "",
};

export const fetchCardInfo = createAsyncThunk(
  "Card info/fetchCardInfo",
  async (id) => {
    const response = await getCardInfo(id);
    return response.data;
  }
);

export const cardSlice = createSlice({
  name: "Card info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardInfo.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCardInfo.fulfilled, (state, action) => {
        state.card = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCardInfo.rejected, (state, action) => {
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

export const {} = cardSlice.actions;
export default cardSlice.reducer;
