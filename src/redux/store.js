import { configureStore } from '@reduxjs/toolkit';
import { appointmentsReducer } from './reducers/appointments.reducer';
import { branchesReducer } from './reducers/branches.reducer';
import { doctorReducer } from './reducers/doctors.reducer';
import { homePageReducer } from './reducers/home.reducer';
import { patientsReducer } from './reducers/patients.reducer';
import { paymentsReducer } from './reducers/payments.reducer';
import { servicesReducer } from './reducers/services.reducer';
import { userReducer } from './reducers/user.reducer';
import { visitsReducer } from './reducers/visits.reducer';

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    homePageReducer: homePageReducer,
    patientsReducer: patientsReducer,
    appointmentsReducer: appointmentsReducer,
    servicesReducer: servicesReducer,
    branchesReducer: branchesReducer,
    doctorReducer: doctorReducer,
    visitsReducer: visitsReducer,
    paymentsReducer: paymentsReducer,
  },
});
