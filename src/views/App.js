import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import '../styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import Signin from './Signin';
import Signup from './Signup';
import HomePage from './HomePage';
import NotFound from './NotFound';
import Gallery from './Gallery';
import OurPeople from './OurPeople';
import DashboardWrapper from './DashboardWrapper';
import DashboardHome from './DashboardHome';
import DashboardPatients from './DashboardPatients';
import DashboardAppointments from './DashboardAppointments';
import DashboardServices from './DashboardServices';
import DashboardBranches from './DashboardBranches';

function App() {
  const theme = createTheme({
    colors: {
      primary: '#018F55',
      grey: '#F4F4F4',
    },
    palette: {
      primary: {
        main: '#018F55',
      },
      text: {
        primary: '#fffff',
      },
    },
    typography: {
      fontFamily: 'Open Sans',
      button: {
        fontVariant: 'normal',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="home" element={<HomePage />}></Route>
          <Route
            path=""
            element={<Navigate to="/home" replace={true} />}
          ></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="our-people" element={<OurPeople />}></Route>
          <Route path="/dashboard" element={<DashboardWrapper />}>
            <Route path="" element={<DashboardHome />}></Route>
            <Route path="patients" element={<DashboardPatients />}></Route>
            <Route
              path="appointments"
              element={<DashboardAppointments />}
            ></Route>
            <Route path="services" element={<DashboardServices />}></Route>
            <Route path="branches" element={<DashboardBranches />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;

