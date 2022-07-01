import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Box, Button, Stack, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

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

function DashboardPatients() {
	let modifiedData;
	const dispatch = useDispatch();
	const { data, loadingGet } = useSelector((state) => state.patientsReducer);

	if (!Array.isArray(data)) {
		modifiedData = [data];
	}

	useEffect(() => {
		dispatch(loadingGetPatientsAction({}));
		axiosInstance
			.get('/patients')
			.then(({ data }) => {
				console.log(data, 'in patients');
				dispatch(getPatientsAction(data.data));
			})
			.catch((error) => {
				console.log(error);
				dispatch(patientsErrorAction(error.message));
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
			<DashboardHeader title='Patients' />
			<Button
				variant='contained'
				color='primary'
				disableElevation
				sx={{
					paddingY: '10px',
					marginY: '10px',
					marginLeft: 'auto',
					borderRadius: '0px',
				}}>
				<Stack direction='row' alignItems='center'>
					<AddRoundedIcon
						sx={{
							color: 'white',
							padding: 0,
						}}
					/>
					<Typography
						sx={{
							fontFamily: 'Titillium Web',
							fontWeight: 700,
						}}>
						Register a Patient
					</Typography>
				</Stack>
			</Button>
			<PatientsTable datas={modifiedData} />
		</Box>
	);
}

export default DashboardPatients;
