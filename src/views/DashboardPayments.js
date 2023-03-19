import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Stack } from '@mui/material';

import DashboardHeader from '../components/DashboardHeader';
import PaymentsTable from '../components/dashboard-payments/PaymentsTable';
import FlatCreateButton from '../components/FlatCreateButton';
import DirectPaymentModal from '../components/dashboard-payments/DirectPaymentModal';
import PrePaidPaymentModal from '../components/dashboard-payments/PrePaidPaymentModal';
import axiosInstance from '../axios.instance';
import { toast } from 'react-toastify';
import {
  createPaymentAction,
  paymentsErrorAction,
} from '../redux/reducers/payments.reducer';
function DashboardPayments() {
  const [openCreateDirectPayment, setOpenCreateDirectPayment] = useState(false);
  const [openCreatePrePaidPayment, setOpenCreatePrePaidPayment] =
    useState(false);
  const { data, loadingGet } = useSelector((state) => state.paymentsReducer);
  const dispatch = useDispatch();
  const sendPayment = (data) => {
    axiosInstance
      .post(`/payments`, data)
      .then((res) => {
        console.log(res);
        dispatch(createPaymentAction(res.data));
        toast.success(`Payment success`);
      })
      .catch((error) => {
        dispatch(paymentsErrorAction(error.response?.data?.message));
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <DashboardHeader title="Payments" />
        <Stack direction="row" justifyContent="flex-end" gap={1}>
          <FlatCreateButton
            text="Direct Payment"
            sx={{ marginLeft: '0px' }}
            onClick={() => {
              setOpenCreateDirectPayment(true);
            }}
          />
          <FlatCreateButton
            text="Pre-paid Payment"
            sx={{ marginLeft: '0px' }}
            onClick={() => {
              setOpenCreatePrePaidPayment(true);
            }}
          />
        </Stack>
        <PaymentsTable datas={data} loadingGet={loadingGet} />
      </Box>
      <DirectPaymentModal
        createPayment={(data) => {
          sendPayment(data);
        }}
        openModal={openCreateDirectPayment}
        setOpenModal={setOpenCreateDirectPayment}
      />
      <PrePaidPaymentModal
        createPayment={(data) => {
          console.log(data, 'payment data prepaid');
          sendPayment(data);
        }}
        openModal={openCreatePrePaidPayment}
        setOpenModal={setOpenCreatePrePaidPayment}
      />
    </>
  );
}

export default DashboardPayments;

