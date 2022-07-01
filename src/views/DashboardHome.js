import { Box, Typography } from '@mui/material';
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';

function DashboardHome() {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
			}}>
			<DashboardHeader title='Dashboard' />
			<Typography>Hello</Typography>
		</Box>
	);
}

export default DashboardHome;
