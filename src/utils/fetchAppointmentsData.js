import axiosInstance from '../axios.instance';
import {
  appointmentsErrorAction,
  getAppointmentsAction,
  loadingGetAppointmentsAction,
} from '../redux/reducers/appointments.reducer';

const fetchAppointmentsData = async (dispatch) => {
  dispatch(loadingGetAppointmentsAction({}));
  await axiosInstance
    .get('/appointments')
    .then(({ data }) => {
      dispatch(getAppointmentsAction(data.data.rows));
    })
    .catch((error) => {
      dispatch(appointmentsErrorAction(error.message));
    });
};

export default fetchAppointmentsData;

