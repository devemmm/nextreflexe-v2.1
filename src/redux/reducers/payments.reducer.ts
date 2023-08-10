import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: true,
  error: null,
};

export const paymentsSlice = createSlice({
  name: 'Payments',
  initialState,
  reducers: {
    createPayment: (state, { payload }) => ({
      ...state,
      pending: false,
      data: payload,
      error: null,
    }),
    getPayments: (state, { payload }) => ({
      ...state,
      loadingGet: false,
      error: null,
      data: payload,
    }),
    loadingGetPayments: (state) => ({
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
  createPayment: createPaymentAction,
  getPayments: getPaymentsAction,
  loadingGetPayments: loadingGetPaymentsAction,
  error: paymentsErrorAction,
} = paymentsSlice.actions;
export const paymentsReducer = paymentsSlice.reducer;

