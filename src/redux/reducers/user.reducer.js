import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {},
	loadingSignIn: false,
	loadingSignUp: false,
	loadingGetUser: false,
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
		loadingSignInUser: (state, { type, payload }) => {
			return { ...state, loadingSignIn: true };
		},
		signUpUser: (state, { type, payload }) => {
			return { ...state, loadingSignUp: false, error: null, data: payload };
		},
		loadingSignUpUser: (state, { type, payload }) => {
			return { ...state, loadingSignUp: true };
		},
		userError: (state, { type, payload }) => {
			return {
				...state,
				loadingSignIn: false,
				loadingGetUser: false,
				loadingSignUp: false,
				error: payload,
				data: {},
			};
		},
	},
});

export const {
	getUser: getUserAction,
	loadingGetUser: loadingGetUserAction,
	signInUser: signInUserAction,
	loadingSignInUser: loadingSignInUserAction,
	signUpUser: signUpUserAction,
	loadingSignUpUser: loadingSignUpUserAction,
	userError: userErrorAction,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
