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
  "cocktails/fetchSingleCockTails",
  async (id) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
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
};

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
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

    builder.addCase(fetchSingleCockTails.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(fetchSingleCockTails.fulfilled, (state, action) => {
        (state.loading = false), (state.cocktail = action.payload.drinks);
      }),
      builder.addCase(fetchSingleCockTails.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      });
  },
});

export default cocktailSlice.reducer;
