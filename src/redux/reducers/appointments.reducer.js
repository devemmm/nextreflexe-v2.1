import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	loadingGet: true,
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
		loadingGetAppointments: (state, { _, __ }) => ({
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
	getAppointments: getAppointmentsAction,
	loadingGetAppointments: loadingGetAppointmentsAction,
	error: appointmentsErrorAction,
} = appointmentsSlice.actions;
export const appointmentsReducer = appointmentsSlice.reducer;
