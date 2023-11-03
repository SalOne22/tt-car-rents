import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../service/api.js';

export const getFirstAdverts = createAsyncThunk(
  'adverts/getFirst',
  async (_, thunkAPI) => {
    try {
      api.setPage(1);
      return await api.fetchAdverts();
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  },
);

export const getMoreAdverts = createAsyncThunk(
  'adverts/getMore',
  async (_, thunkAPI) => {
    try {
      return await api.fetchAdverts();
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  },
);
