import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      const indexToRemove = state.items.findIndex(
        ({ id }) => id === action.payload,
      );
      state.items.splice(indexToRemove, 1);
    },
  },
});

export const { add, remove } = slice.actions;
export default slice.reducer;
