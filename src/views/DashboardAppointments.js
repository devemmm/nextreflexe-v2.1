import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import axiosInstance from '../axios.instance';
import AppointmentsTable from '../components/dashboard-appointments/AppointmentsTable';
import DashboardHeader from '../components/DashboardHeader';
import FlatCreateButton from '../components/FlatCreateButton';
import {
  appointmentsErrorAction,
  getAppointmentsAction,
  loadingGetAppointmentsAction,
} from '../redux/reducers/appointments.reducer';

function DashboardAppointments() {
  const dispatch = useDispatch();
  const { data, loadingGet } = useSelector(
    (state) => state.appointmentsReducer,
  );

  useEffect(() => {
    dispatch(loadingGetAppointmentsAction({}));
    axiosInstance
      .get('/appointments')
      .then(({ data }) => {
        dispatch(getAppointmentsAction(data.data.rows));
      })
      .catch((error) => {
        console.log(error);
        dispatch(appointmentsErrorAction(error.message));
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
      }}
    >
      <DashboardHeader title="Appointments" />
      <FlatCreateButton text="Make an Appointment" />
      <AppointmentsTable datas={data} loadingGet={loadingGet} />
    </Box>
  );
}

export default DashboardAppointments;
