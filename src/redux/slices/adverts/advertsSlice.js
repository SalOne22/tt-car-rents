import { createSlice } from '@reduxjs/toolkit';
import { getFirstAdverts, getMoreAdverts } from './advertsOperations.js';

const initialState = {
  items: null,
  canLoadMore: true,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getFirstAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFirstAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.canLoadMore = action.payload.length >= 12;
        state.items = action.payload;
      })
      .addCase(getFirstAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getMoreAdverts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMoreAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.canLoadMore = action.payload.length >= 12;
        state.items = state.items.concat(action.payload);
      })
      .addCase(getMoreAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;
