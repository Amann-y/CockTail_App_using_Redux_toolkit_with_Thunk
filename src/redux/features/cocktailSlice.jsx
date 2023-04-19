import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCockTails = createAsyncThunk(
  "cocktails/fetchCockTails",
  async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`
    );
    const result = await res.json();
    return result;
  }
);

export const fetchSingleCockTails = createAsyncThunk(
  "cocktail/fetchSingleCockTails",
  async (id) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const result = await res.json();
    return result;
  }
);

export const fetchSearchCockTails = createAsyncThunk(
  "cocktails/fetchSearchCockTails",
  async (name) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${name}`
    );
    const result = await res.json();
    return result;
  }
);

const initialState = {
  loading: false,
  cocktails: [],
  error: null,
  cocktail: [],
  cart: [],
  search: [],
};

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.cart.push(action.payload);
    },
    removefromcart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCockTails.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchCockTails.fulfilled, (state, action) => {
        (state.loading = false), (state.cocktails = action.payload.drinks);
      }),
      builder.addCase(fetchCockTails.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });

    // fetch single cocktail
    builder.addCase(fetchSingleCockTails.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchSingleCockTails.fulfilled, (state, action) => {
        (state.loading = false), (state.cocktail = action.payload.drinks);
      }),
      builder.addCase(fetchSingleCockTails.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });

    // Search cocktail
    builder.addCase(fetchSearchCockTails.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchSearchCockTails.fulfilled, (state, action) => {
        (state.loading = false), (state.search = action.payload.drinks);
      }),
      builder.addCase(fetchSearchCockTails.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export const { addtocart, removefromcart } = cocktailSlice.actions;

export default cocktailSlice.reducer;
