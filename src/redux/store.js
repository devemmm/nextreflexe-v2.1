import { configureStore } from '@reduxjs/toolkit';
import { appointmentsReducer } from './reducers/appointments.reducer';
import { patientsReducer } from './reducers/patients.reducer';
import { userReducer } from './reducers/user.reducer';

export const store = configureStore({
	reducer: {
		userReducer: userReducer,
		patientsReducer: patientsReducer,
		appointmentsReducer: appointmentsReducer,
	},
});
