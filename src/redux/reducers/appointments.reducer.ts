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
    getAppointments: (state, { payload }) => ({
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
    pendingCreateAppointment: (state) => ({
      ...state,
      pending: true,
    }),
    createAppointment: (state, { payload }) => ({
      ...state,
      pending: false,
      data: payload,
      error: null,
    }),
    deleteAppointment: (state, { payload }) => ({
      ...state,
      error: null,
      loadingGet: false,
      pending: false,
      data: payload,
    }),
    loadingGetAppointments: (state) => ({
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
  getAppointments: getAppointmentsAction,
  loadingGetAppointments: loadingGetAppointmentsAction,
  pendingCreateAppointment: pendingCreateAppointmentAction,
  createAppointment: createAppointmentAction,
  pendingDeleteAppointment: pendingDeleteAppointmentAction,
  deleteAppointment: deleteAppointmentAction,
  error: appointmentsErrorAction,
} = appointmentsSlice.actions;
export const appointmentsReducer = appointmentsSlice.reducer;

