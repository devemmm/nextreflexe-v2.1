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
			<PatientsTable datas={modifiedData} setOpenEditModal={setOpenEditModal} />
			<Modal
				open={openEditModal}
				onClose={() => {
					setOpenEditModal(false);
				}}
				sx={{
					position: 'relative',
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
		</Box>
	);
}

export default DashboardPatients;
