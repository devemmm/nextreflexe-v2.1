import { Box, Typography } from '@mui/material';
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';

function DashboardPatients() {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
			}}>
			<DashboardHeader title='Patients' />
			<Typography>Patients</Typography>
		</Box>
	);
}

export default DashboardPatients;
