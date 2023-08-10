import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingSignIn: false,
  loadingSignOut: false,
  loadingSignUp: false,
  loadingGetUser: true,
  loadingSendMessage: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    getUser: (state, { type, payload }) => {
      return { ...state, loadingGetUser: false, error: null, data: payload };
    },
    loadingGetUser: (state, { type, payload }) => {
      return { ...state, loadingGetUser: true };
    },
    signInUser: (state, { type, payload }) => {
      return { ...state, loadingSignIn: false, error: null, data: payload };
    },
    loadingSignOutUser: (state, { type, payload }) => {
      return { ...state, loadingSignOut: true };
    },
    signOutUser: (state, { type, payload }) => {
      return { ...state, loadingSignOut: false, error: null, data: payload };
    },
    loadingSignInUser: (state, { type, payload }) => {
      return { ...state, loadingSignIn: true };
    },
    signUpUser: (state, { type, payload }) => {
      return { ...state, loadingSignUp: false, error: null, data: payload };
    },
    loadingSignUpUser: (state, { type, payload }) => {
      return { ...state, loadingSignUp: true };
    },
    loadingSendMessage: (state, { type, payload }) => {
      return { ...state, loadingSendMessage: true };
    },
    sendMessage: (state, { type, payload }) => {
      return {
        ...state,
        loadingSendMessage: false,
        error: null,
        data: payload,
      };
    },
    userError: (state, { type, payload }) => {
      return {
        ...state,
        loadingSignIn: false,
        loadingGetUser: false,
        loadingSignUp: false,
        loadingSignOut: false,
        loadingSendMessage: false,
        error: payload,
        data: [...state.data],
      };
    },
  },
});

export const {
  getUser: getUserAction,
  loadingGetUser: loadingGetUserAction,
  signInUser: signInUserAction,
  loadingSignOutUser: loadingSignOutAction,
  signOutUser: signOutUserAction,
  loadingSignInUser: loadingSignInUserAction,
  signUpUser: signUpUserAction,
  loadingSignUpUser: loadingSignUpUserAction,
  loadingSendMessage: loadingSendMessageAction,
  sendMessage: sendMessageAction,
  userError: userErrorAction,
} = userSlice.actions;
export const userReducer = userSlice.reducer;

