import React, { useEffect, useRef } from 'react';

import { Box, Stack, useTheme } from '@mui/material';

import DashboardNavBar from '../components/dashboard-wrapper/DashboardNavBar';
import DashboardSideBar from '../components/dashboard-wrapper/DashboardSideBar';
import DashboardContent from './DashboardContent';

function DashboardWrapper() {
	const theme = useTheme();
	const sideBarRef = useRef();
	// const dispatch = useDispatch();

	function toogleShowSideBar() {
		sideBarRef.current.toogleShowSideBar();
	}

	useEffect(() => {
		const userCredentials = {
			token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJXQjEwMSIsImlhdCI6MTY1NjY2NDI2Nn0.-gLaVJx610CYF0P5S8AyUycuKS93gKObq7Ai0pnFd10',
		};

		localStorage.setItem('userCredentials', JSON.stringify(userCredentials));

		// dispatch(loadingGetUserAction({}));
		// axiosInstance.get('/users');
	});

	return (
		<Box
			maxWidth='1440px'
			width='100%'
			height='100%'
			margin='0px auto'
			sx={{
				background: theme.colors.grey,
				overflowX: 'auto',
				'& *::-webkit-scrollbar': {
					height: '2px',
					width: '5px',
					background: 'transparent',
				},
				'& *::-webkit-scrollbar-thumb': {
					background: theme.palette.primary.main,
					borderRadius: '15px',
				},
			}}>
			<DashboardNavBar />
			<Stack
				position='relative'
				direction='row'
				width='100%'
				height={{
					xs: 'calc(100% - 41px)',
					sm: 'calc(100% - 46px)',
					md: 'calc(100% - 52px)',
				}}
				zIndex={8}>
				<DashboardSideBar ref={sideBarRef} />
				<DashboardContent toogleShowSideBar={toogleShowSideBar} />
			</Stack>
		</Box>
	);
}

export default DashboardWrapper;
