import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Stack } from '@mui/material';

import DashboardHeader from '../components/DashboardHeader';
import PaymentsTable from '../components/dashboard-payments/PaymentsTable';
import FlatCreateButton from '../components/FlatCreateButton';
import DirectPaymentModal from '../components/dashboard-payments/DirectPaymentModal';
import PrePaidPaymentModal from '../components/dashboard-payments/PrePaidPaymentModal';

function DashboardPayments() {
  const [openCreateDirectPayment, setOpenCreateDirectPayment] = useState(false);
  const [openCreatePrePaidPayment, setOpenCreatePrePaidPayment] =
    useState(false);
  const { data, loadingGet } = useSelector((state) => state.paymentsReducer);

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
          console.log(data, 'payment data direct');
        }}
        openModal={openCreateDirectPayment}
        setOpenModal={setOpenCreateDirectPayment}
      />
      <PrePaidPaymentModal
        createPayment={(data) => {
          console.log(data, 'payment data prepaid');
        }}
        openModal={openCreatePrePaidPayment}
        setOpenModal={setOpenCreatePrePaidPayment}
      />
    </>
  );
}

export default DashboardPayments;

