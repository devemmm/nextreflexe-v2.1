import { Box, Divider } from '@mui/material';
import React from 'react';
import Counters from '../components/dashboard-home/counters';
import CustomChart from '../components/dashboard-home/CustomChart';
import DashboardHeader from '../components/DashboardHeader';

function DashboardHome() {
  return (
    <Box
      sx={{
        width: '100%',
        // height: '100%',
      }}
    >
      <DashboardHeader title="Dashboard" />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          display: {
            xs: 'flex',
          },
          height: { md: 10 },
        }}
      />
      <Counters />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          display: {
            xs: 'flex',
          },
          height: { md: 10 },
        }}
      />
      <CustomChart />
    </Box>
  );
}

export default DashboardHome;

