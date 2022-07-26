import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Box, Stack, useTheme } from '@mui/material';

import DashboardNavBar from '../components/dashboard-wrapper/DashboardNavBar';
import DashboardSideBar from '../components/dashboard-wrapper/DashboardSideBar';
import fetchAppointmentsData from '../utils/fetchAppointmentsData';
import fetchBranchesData from '../utils/fetchBranchesData';
import fetchDoctorsData from '../utils/fetchDoctorsData';
import fetchPatientsData from '../utils/fetchPatientsData';
import fetchServicesData from '../utils/fetchServicesData';
import fetchUsersData from '../utils/fetchUserData';
import DashboardContent from './DashboardContent';
import fetchVisitsData from '../utils/fetchVisitsData';
import fetchPaymentsData from '../utils/fetchPaymentsData';

function DashboardWrapper() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const sideBarRef = useRef();

  function toogleShowSideBar() {
    sideBarRef.current.toogleShowSideBar();
  }
  const auth_user = JSON.parse(localStorage.getItem('userCredentials'));

  useEffect(() => {
    if (auth_user === null) {
      navigate('/signin');
    }

    fetchDoctorsData(dispatch);
    fetchServicesData(dispatch);
    fetchBranchesData(dispatch);
    fetchAppointmentsData(dispatch);
    fetchPatientsData(dispatch);
    fetchUsersData(dispatch);
    fetchVisitsData(dispatch);
    fetchPaymentsData(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      maxWidth="1440px"
      width="100%"
      height="100%"
      margin="0px auto"
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
      }}
    >
      <DashboardNavBar />
      <Stack
        position="relative"
        direction="row"
        width="100%"
        height={{
          xs: 'calc(100% - 41px)',
          sm: 'calc(100% - 46px)',
          md: 'calc(100% - 52px)',
        }}
        zIndex={8}
      >
        <DashboardSideBar ref={sideBarRef} />
        <DashboardContent toogleShowSideBar={toogleShowSideBar} />
      </Stack>
    </Box>
  );
}

export default DashboardWrapper;
