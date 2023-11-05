import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../service/api.js';

export const getFirstAdverts = createAsyncThunk(
  'adverts/getFirst',
  async (filters, thunkAPI) => {
    try {
      api.setPage(1);
      return await api.fetchAdverts(filters);
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  },
);

export const getMoreAdverts = createAsyncThunk(
  'adverts/getMore',
  async (filters, thunkAPI) => {
    try {
      return await api.fetchAdverts(filters);
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  },
);
