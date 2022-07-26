import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: true,
  error: null,
};

export const visitsSlice = createSlice({
  name: 'Visits',
  initialState,
  reducers: {
    getVisits: (state, { _, payload }) => ({
      ...state,
      loadingGet: false,
      error: null,
      data: payload,
    }),
    loadingGetVisits: (state, { _, __ }) => ({
      ...state,
      loadingGet: true,
    }),
    error: (state, { _, payload }) => ({
      ...state,
      loadingGet: false,
      error: payload,
    }),
  },
});

export const {
  getVisits: getVisitsAction,
  loadingGetVisits: loadingGetVisitsAction,
  error: visitsErrorAction,
} = visitsSlice.actions;
export const visitsReducer = visitsSlice.reducer;

