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
    loadingGetData: (state, { type, payload }) => {
      return { ...state, loading: true, error: null };
    },
    getData: (state, { type, payload }) => {
      return { ...state, loading: false, error: null, data: payload };
    },
    error: (state, { type, payload }) => {
      return { ...state, loading: false, error: payload };
    },
  },
});

export const {
  getData: getDataAction,
  loadingGetData: loadingGetDataAction,
  error: HomePageErrorAction,
} = homePageSlice.actions;
export const homePageReducer = homePageSlice.reducer;

