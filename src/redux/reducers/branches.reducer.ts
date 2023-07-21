import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loadingGet: true,
  pending: false,
  error: null,
};

export const branchesSlice = createSlice({
  name: 'Branches',
  initialState,
  reducers: {
    getBranches: (state, { payload }) => ({
      ...state,
      loadingGet: false,
      error: null,
      data: payload,
    }),
    loadingGetBranches: (state) => ({
      ...state,
      loadingGet: true,
    }),
    createBanch: (state, { payload }) => ({
      ...state,
      pending: false,
      data: payload,
      error: null,
    }),
    pendingBranch: (state) => ({
      ...state,
      pending: true,
    }),
    deleteBranch: (state, { payload }) => ({
      ...state,
      error: null,
      pending: false,
      data: payload,
    }),
    error: (state, { payload }) => ({
      ...state,
      loadingGet: false,
      pending: false,
      error: payload,
    }),
  },
});

export const {
  getBranches: getBranchesAction,
  loadingGetBranches: loadingGetBranchesAction,
  createBanch: createBanchAction,
  deleteBranch: deleteBranchAction,
  pendingBranch: pendingBranchAction,
  error: branchesErrorAction,
} = branchesSlice.actions;
export const branchesReducer = branchesSlice.reducer;

