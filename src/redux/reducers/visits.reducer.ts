import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: true,
  pending: false,
  error: null,
};

export const visitsSlice = createSlice({
  name: 'Visits',
  initialState,
  reducers: {
    getVisits: (state, { payload }) => ({
      ...state,
      loadingGet: false,
      error: null,
      data: payload,
    }),
    pendingVisit: (state) => ({
      ...state,
      pending: true,
    }),
    startVisit: (state, { payload }) => ({
      ...state,
      error: null,
      pending: false,
      data: payload,
    }),
    deleteVisit: (state, { payload }) => ({
      ...state,
      error: null,
      pending: false,
      data: payload,
    }),
    loadingGetVisits: (state) => ({
      ...state,
      loadingGet: true,
    }),
    error: (state, { payload }) => ({
      ...state,
      loadingGet: false,
      pending: false,
      error: payload,
    }),
  },
});

export const {
  getVisits: getVisitsAction,
  pendingVisit: pendingVisitAction,
  deleteVisit: deleteVisitAction,
  startVisit: startVisitAction,
  loadingGetVisits: loadingGetVisitsAction,
  error: visitsErrorAction,
} = visitsSlice.actions;
export const visitsReducer = visitsSlice.reducer;

