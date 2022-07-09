import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {},
	loadingGet: true,
	error: null,
};

export const paymentsSlice = createSlice({
	name: 'Payments',
	initialState,
	reducers: {
		getPayments: (state, { _, payload }) => ({
			...state,
			loadingGet: false,
			error: null,
			data: payload,
		}),
		loadingGetPayments: (state, { _, __ }) => ({
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
	getPayments: getPaymentsAction,
	loadingGetPayments: loadingGetPaymentsAction,
	error: paymentsErrorAction,
} = paymentsSlice.actions;
export const paymentsReducer = paymentsSlice.reducer;
