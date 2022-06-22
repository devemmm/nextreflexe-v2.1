import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const homePageSlice = createSlice({
  name: 'HomePage',
  initialState,
  reducers: {
    getData: (state, { type, payload }) => {
      return { ...state, loading: false, error: null, data: payload };
    },
    loadingGetData: (state, { type, payload }) => {
      return { ...state, loading: true, error: null };
    },
    error: (state, { type, payload }) => {
      return { ...state, loading: true, error: payload };
    },
  },
});

export const {
  getData: getDataAction,
  loadingGetData: lodingGetDataAction,
  error: errorAction,
} = homePageSlice.actions;
export const homePageReducer = homePageSlice.reducer;
