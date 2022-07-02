import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Button, IconButton, Modal, Stack, Typography, useTheme } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseIcon from '@mui/icons-material/Close';

import DashboardHeader from '../components/DashboardHeader';
import PatientsTable from '../components/dashboard-patients/PatientsTable';
import axiosInstance from '../axios.instance';
import { useDispatch } from 'react-redux';
import {
	getPatientsAction,
	loadingGetPatientsAction,
	patientsError,
	patientsErrorAction,
} from '../redux/reducers/patients.reducer';
import InputFieldFilled from '../components/InputFieldFilled';
import Loading from '../components/Loading';
import FlatCreateButton from '../components/FlatCreateButton';

function DashboardPatients() {
	let modifiedData;
	const theme = useTheme();
	const dispatch = useDispatch();
	const { data, loadingGet } = useSelector((state) => state.patientsReducer);
	const [openEditModal, setOpenEditModal] = useState(false);

	if (!Array.isArray(data)) {
		modifiedData = [data];
	}

	useEffect(() => {
		dispatch(loadingGetPatientsAction({}));
		axiosInstance
			.get('/patients')
			.then(({ data }) => {
				dispatch(getPatientsAction(data.data));
			})
			.catch((error) => {
				console.log(error);
				dispatch(patientsErrorAction(error.message));
			});
	}, []);

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexFlow: 'column nowrap',
				}}>
				<DashboardHeader title='Patients' />
				<FlatCreateButton text='Register a Patient' />
				<PatientsTable
					datas={modifiedData}
					loadingGet={loadingGet}
					setOpenEditModal={setOpenEditModal}
				/>
			</Box>
			<Modal
				open={openEditModal}
				onClose={() => {
					setOpenEditModal(false);
				}}
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '20px',
				}}>
				<Box
					sx={{
						background: 'white',
						boxShadow:
							'0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
						borderRadius: '10px',
						padding: {
							xs: '25px  20px',
							sm: '40px 30px',
							md: '55px 40px',
						},
					}}>
					<IconButton
						color='primary'
						onClick={() => {
							setOpenEditModal(false);
						}}
						sx={{
							position: 'absolute',
							top: 0,
							right: 0,
						}}>
						<CloseIcon />
					</IconButton>
					<InputFieldFilled label='First Name *' theme={theme} sx={{ width: '100%' }} />
					<InputFieldFilled label='Last Name *' theme={theme} sx={{ width: '100%' }} />
				</Box>
			</Modal>
		</>
	);
}

export default DashboardPatients;
