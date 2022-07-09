import { configureStore } from '@reduxjs/toolkit';
import { appointmentsReducer } from './reducers/appointments.reducer';
import { branchesReducer } from './reducers/branches.reducer';
import { patientsReducer } from './reducers/patients.reducer';
import { paymentsReducer } from './reducers/payments.reducer';
import { servicesReducer } from './reducers/services.reducer';
import { userReducer } from './reducers/user.reducer';

export const store = configureStore({
	reducer: {
		userReducer: userReducer,
		patientsReducer: patientsReducer,
		appointmentsReducer: appointmentsReducer,
		servicesReducer: servicesReducer,
		branchesReducer: branchesReducer,
		paymentsReducer: paymentsReducer,
	},
});
