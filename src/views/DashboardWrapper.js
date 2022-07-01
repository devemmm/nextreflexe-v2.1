import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Box, Stack, useTheme } from '@mui/material';

import axiosInstance from '../axios.instance';
import { loadingGetUserAction } from '../redux/reducers/user.reducer';
import DashboardNavBar from '../components/dashboard-wrapper/DashboardNavBar';
import DashboardSideBar from '../components/dashboard-wrapper/DashboardSideBar';
import DashboardContent from './DashboardContent';

function DashboardWrapper({ title }) {
	const theme = useTheme();
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	const userCredentials = {
	// 		token:
	// 			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJXQjEwMSIsImlhdCI6MTY1NjY2NDI2Nn0.-gLaVJx610CYF0P5S8AyUycuKS93gKObq7Ai0pnFd10',
	// 	};

	// 	localStorage.setItem('userCredentials', JSON.stringify(userCredentials));

	// 	dispatch(loadingGetUserAction({}));
	// 	axiosInstance.get('/users');
	// });

	return (
		<Box
			maxWidth='1440px'
			width='100%'
			height='100%'
			margin='0px auto'
			marginTop={{
				xs: '41px',
				sm: '46px',
				md: '52px',
			}}
			sx={{
				background: theme.colors.grey,
				'& *::-webkit-scrollbar': {
					height: '2px',
					width: '5px',
					background: theme.colors.grey,
				},
				'& *::-webkit-scrollbar-thumb': {
					background: theme.palette.primary.main,
					borderRadius: '15px',
				},
			}}>
			<DashboardNavBar />
			<Stack direction='row'>
				<DashboardSideBar />
				<DashboardContent />
			</Stack>
		</Box>
	);
}

DashboardWrapper.propTypes = {
	title: PropTypes.string.isRequired,
	[PropTypes.string]: PropTypes.any,
};

export default DashboardWrapper;
