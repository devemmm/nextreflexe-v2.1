import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	loadingGet: true,
	error: null,
};

export const branchesSlice = createSlice({
	name: 'Branches',
	initialState,
	reducers: {
		getBranches: (state, { _, payload }) => ({
			...state,
			loadingGet: false,
			error: null,
			data: payload,
		}),
		loadingGetBranches: (state, { _, __ }) => ({
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
	getBranches: getBranchesAction,
	loadingGetBranches: loadingGetBranchesAction,
	error: branchesErrorAction,
} = branchesSlice.actions;
export const branchesReducer = branchesSlice.reducer;
