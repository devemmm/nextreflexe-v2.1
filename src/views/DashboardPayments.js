/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../axios.instance';
import PaymentsTable from '../components/dashboard-payments/PaymentsTable';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import {
	getPaymentsAction,
	loadingGetPaymentsAction,
	paymentsErrorAction,
} from '../redux/reducers/payments.reducer';

function DashboardPayments() {
	const dispatch = useDispatch();
	const { data, loadingGet } = useSelector((state) => state.paymentsReducer);

	useEffect(() => {
		dispatch(loadingGetPaymentsAction({}));
		axiosInstance
			.get('/payments')
			.then(({ data }) => {
				dispatch(getPaymentsAction(data.data.rows));
			})
			.catch((error) => {
				console.log(error);
				dispatch(paymentsErrorAction(error.message));
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
				<DashboardHeader title='Payments' />
				<Stack direction='row' justifyContent='end' gap='10px'>
					<FlatCreateButton text='Direct Payment' sx={{ marginLeft: '0px' }} />
					<FlatCreateButton text='Prepaid Payment' sx={{ marginLeft: '0px' }} />
				</Stack>
				<PaymentsTable datas={data} loadingGet={loadingGet} />
			</Box>
		</>
	);
}

export default DashboardPayments;
