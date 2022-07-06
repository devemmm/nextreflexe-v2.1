import { useEffect, useRef } from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import DashboardNavBar from '../components/dashboard-wrapper/DashboardNavBar';
import DashboardSideBar from '../components/dashboard-wrapper/DashboardSideBar';
import DashboardContent from './DashboardContent';
import { useNavigate } from 'react-router';

function DashboardWrapper() {
  const theme = useTheme();
  const navigate = useNavigate();
  const sideBarRef = useRef();
  // const dispatch = useDispatch();

  function toogleShowSideBar() {
    sideBarRef.current.toogleShowSideBar();
  }
  const auth_user = JSON.parse(localStorage.getItem('userCredentials'));

  useEffect(() => {
    if (auth_user === null) {
      navigate('/signin');
    }
  });

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
