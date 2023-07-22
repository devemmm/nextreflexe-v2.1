import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import DashboardHeader from '../components/DashboardHeader';
import PaymentsTable from '../components/dashboard-payments/PaymentsTable';
function DashboardPayments() {
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
        <DashboardHeader title="Payments History" />
        <PaymentsTable datas={data} loadingGet={loadingGet} />
      </Box>
    </>
  );
}

export default DashboardPayments;

