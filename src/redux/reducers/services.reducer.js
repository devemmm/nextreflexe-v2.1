import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: true,
  pending: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: 'Services',
  initialState,
  reducers: {
    getServices: (state, { _, payload }) => ({
      ...state,
      loadingGet: false,
      error: null,
      data: payload,
    }),
    pendingService: (state) => ({
      ...state,
      loadingGet: false,
      pending: true,
    }),
    createService: (state, { payload }) => ({
      ...state,
      pending: false,
      data: payload,
      error: null,
    }),
    deleteService: (state, { payload }) => ({
      ...state,
      error: null,
      pending: false,
      data: payload,
    }),
    loadingGetServices: (state, { _, __ }) => ({
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
  getServices: getServicesAction,
  createService: createServiceAction,
  deleteService: deleteServiceAction,
  pendingService: pendingServiceAction,
  loadingGetServices: loadingGetServicesAction,
  error: servicesErrorAction,
} = servicesSlice.actions;
export const servicesReducer = servicesSlice.reducer;

