import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCards } from "../API/getCards";
import { getCategories } from "../API/getCategories";

const initialState = {
  cards: {
    cards: [],
    loading: false,
    error: "",
  },
  categories: {
    categories: [],
    selected: undefined,
    loading: false,
    error: "",
  },
  addCards: {
    isShowBtn: true,
    isAdd: false,
    loading: false,
    error: "",
  },
  search: {
    text: undefined,
    isSearch: false,
  },
};

export const fetchCard = createAsyncThunk(
  "catalog/fetchCard",
  async (params) => {
    const { categoryId, offset, search } = params;
    const response = await getCards(categoryId, offset, search);
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "catalog/fetchCategories",
  async () => {
    const response = await getCategories();
    return response.data;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    updateIsAdd: (state) => {
      state.isAdd = true;
    },
    resetCards: (state) => {
      state.cards.cards = [];
      state.addCards.isShowBtn = true;
      state.cards.loading = false;
      state.cards.error = "";
      state.addCards.offset = undefined;
      state.addCards.error = "";
      state.cards.loading = false;
      state.search.text = undefined;
      state.search.isSearch = false;
    },
    cleanCards: (state) => {
      state.cards.cards = [];
    },
    setSelected: (state, action) => {
      state.categories.selected = action.payload;
    },
    setSearch: (state, action) => {
      if (action.payload === "") {
        state.search.text = undefined;
      } else {
        state.search.text = action.payload;
      }
    },
    isSearch: (state) => {
      state.search.isSearch = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        if (state.cards.cards.length === 0) {
          state.cards.loading = true;
          state.cards.error = "";
        } else {
          state.addCards.loading = true;
          state.cards.error = "";
        }
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        if (state.cards.cards.length === 0) {
          state.cards.cards = action.payload;
        } else {
          if (action.payload.length === 0) {
            state.addCards.isShowBtn = false;
          }
          state.cards.cards = [...state.cards.cards, ...action.payload];
          state.addCards.loading = false;
        }
        if (state.cards.cards.length < 6) {
          state.addCards.isShowBtn = false;
        }
        state.cards.loading = false;
        state.cards.error = "";
      })
      .addCase(fetchCard.rejected, (state, action) => {
        console.log("Error:", action.payload);
        state.cards.loading = false;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.categories.loading = true;
        state.categories.error = "";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.categories = action.payload;
        state.categories.loading = false;
        state.categories.error = "";
      });
  },
});

export const {
  updateIsAdd,
  resetCards,
  setSelected,
  setSearch,
  cleanCards,
  isSearch,
} = catalogSlice.actions;
export default catalogSlice.reducer;
