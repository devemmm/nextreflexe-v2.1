import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: false,
  pending: false,
  error: null,
};

export const appointmentsSlice = createSlice({
  name: 'Appointments',
  initialState,
  reducers: {
    getAppointments: (state, { _, payload }) => ({
      ...state,
      loadingGet: false,
      error: null,
      data: payload,
    }),
    pendingDeleteAppointment: (state) => ({
      ...state,
      loadingGet: false,
      pending: true,
    }),
    deleteAppointment: (state, { payload }) => ({
      ...state,
      error: null,
      loadingGet: false,
      pending: false,
      data: payload,
    }),
    loadingGetAppointments: (state, { _, __ }) => ({
      ...state,
      loadingGet: true,
    }),
    error: (state, { _, payload }) => ({
      ...state,
      loadingGet: false,
      pending: false,
      error: payload,
    }),
  },
});

export const {
  getAppointments: getAppointmentsAction,
  loadingGetAppointments: loadingGetAppointmentsAction,
  pendingDeleteAppointment: pendingDeleteAppointmentAction,
  deleteAppointment: deleteAppointmentAction,
  error: appointmentsErrorAction,
} = appointmentsSlice.actions;
export const appointmentsReducer = appointmentsSlice.reducer;

