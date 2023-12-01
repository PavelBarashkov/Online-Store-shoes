import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: undefined,
};

export const headerSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      if (action.payload === "") {
        state.search = undefined;
      } else {
        state.search = action.payload;
      }
    },
  },
});

export const { setSearch } = headerSlice.actions;
export default headerSlice.reducer;
