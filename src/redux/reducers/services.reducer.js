import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	loadingGet: true,
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
	loadingGetServices: loadingGetServicesAction,
	error: servicesErrorAction,
} = servicesSlice.actions;
export const servicesReducer = servicesSlice.reducer;
