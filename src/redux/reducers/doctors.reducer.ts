import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: true,
  error: null,
};

export const doctorSlice = createSlice({
  name: 'Doctors',
  initialState,
  reducers: {
    getDoctors: (state, { type, payload }) => {
      return { ...state, data: payload, loadingGet: false, error: null };
    },
    loadingGetDoctors: (state, { type, payload }) => {
      return { ...state, loadingGet: true };
    },
    doctorError: (state, { type, payload }) => {
      return { ...state, error: payload, loadingGet: false };
    },
  },
});

export const {
  getDoctors: getDoctorAction,
  loadingGetDoctors: loadingGetDoctorAction,
  doctorError: doctorErrorAction,
} = doctorSlice.actions;
export const doctorReducer = doctorSlice.reducer;

