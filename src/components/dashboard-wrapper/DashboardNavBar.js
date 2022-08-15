import { Box, IconButton } from '@mui/material';
import React from 'react';
import { toast } from 'react-toastify';
import logo from '../../assets/images/logo.svg';
import logoutIcon from '../../assets/icons/logout-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSignOutAction } from '../../redux/reducers/user.reducer';
import axiosInstance from '../../axios.instance';
import { useNavigate } from 'react-router';
import Skeleton from '@mui/material/Skeleton';

function DashboardNavBar({ sx, ...props }) {
  const { loadingSignOut } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loadingSignOutAction({}));
    axiosInstance
      .post('/users/signout')
      .then((res) => {
        localStorage.removeItem('userCredentials');
        toast.success('You have been signed out');
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box
      sx={{
        // maxWidth: '1440px',
        transformOrigin: 'center',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: {
          xs: '5px 20px',
          sm: '5px 30px',
          md: '5px 40px',
        },
        background: 'white',
        zIndex: 1000,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo icon"
        sx={{
          height: {
            xs: '15px',
            sm: '20px',
            md: '25px',
          },
        }}
      />
      <IconButton onClick={logout}>
        <Box
          component="img"
          src={logoutIcon}
          alt="logout icon"
          sx={{
            height: {
              xs: '15px',
              sm: '20px',
              md: '25px',
            },
          }}
        />
        {loadingSignOut ? <Skeleton /> : null}
      </IconButton>
    </Box>
  );
}

export default DashboardNavBar;

