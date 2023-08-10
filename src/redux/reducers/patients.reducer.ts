import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: true,
  error: null,
};

export const patientsSlice = createSlice({
  name: 'Patients',
  initialState,
  reducers: {
    getPatients: (state, { payload }) => ({
      ...state,
      loadingGet: false,
      error: null,
      data: payload,
    }),
    loadingGetPatients: (state) => ({
      ...state,
      loadingGet: true,
    }),
    error: (state, { payload }) => ({
      ...state,
      loadingGet: false,
      error: payload,
    }),
  },
});

export const {
  getPatients: getPatientsAction,
  loadingGetPatients: loadingGetPatientsAction,
  error: patientsErrorAction,
} = patientsSlice.actions;
export const patientsReducer = patientsSlice.reducer;

