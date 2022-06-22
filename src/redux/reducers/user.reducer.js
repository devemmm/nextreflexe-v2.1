import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    loadingSignIn: false,
    loadingSignUp: false,
    error: null,
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        signInUser: (state, { type, payload }) => {
            return { ...state, loadingSignIn: false, error: null, data: payload };
        },
        loadingSignInUser: (state, { type, payload }) => {
            return { ...state, loadingSignIn: true }
        },
        signUpUser: (state, { type, payload }) => {
            return { ...state, loadingSignUp: false, error: null, data: payload };
        },
        loadingSignUpUser: (state, { type, payload }) => {
            return { ...state, loadingSignUp: true }
        },
        userError: (state, { type, payload }) => {
            return { ...state, loadingSignIn: false, error: payload, data: {} }
        }
    }
})

export const { signInUser, loadingSignInUser, signUpUser, loadingSignUpUser, userError } = userSlice.actions;
export const userReducer = userSlice.reducer;
