import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box } from '@mui/material';

import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import {
	branchesErrorAction,
	getBranchesAction,
	loadingGetBranchesAction,
} from '../redux/reducers/branches.reducer';
import axiosInstance from '../axios.instance';
import BranchesTable from '../components/dashboard-branches/BranchesTable';

function DashboardBranches() {
	const dispatch = useDispatch();
	const { data, loadingGet } = useSelector((state) => state.branchesReducer);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	useEffect(() => {
		dispatch(loadingGetBranchesAction({}));
		axiosInstance
			.get('/branches')
			.then(({ data }) => {
				dispatch(getBranchesAction(data.data.rows));
			})
			.catch((error) => {
				console.log(error);
				dispatch(branchesErrorAction(error.message));
			});
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexFlow: 'column nowrap',
			}}>
			<DashboardHeader title='Branches' />
			<FlatCreateButton text='Create Branch' />
			<BranchesTable
				datas={data}
				loadingGet={loadingGet}
				setOpenDeleteModal={setOpenDeleteModal}
				setOpenEditModal={setOpenEditModal}
			/>
		</Box>
	);
}

export default DashboardBranches;
