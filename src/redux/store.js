import { configureStore } from '@reduxjs/toolkit';
import { homePageReducer } from './reducers/home.reducer';
import { userReducer } from './reducers/user.reducer';

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    homePageReducer: homePageReducer,
  },
});
