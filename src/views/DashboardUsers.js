import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

import { Box } from '@mui/material';

import DashboardHeader from '../components/DashboardHeader';

function DashboardUsers() {
  const { data, loadingGetUser } = useSelector((state) => state.userReducer);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
      }}
    >
      <DashboardHeader title="Users" />
      <Outlet context={{ data, loadingGetUser }} />
    </Box>
  );
}

export default DashboardUsers;

