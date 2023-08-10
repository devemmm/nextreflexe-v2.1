import axiosInstance from '../axios.instance';
import {
  doctorErrorAction,
  getDoctorAction,
  loadingGetDoctorAction,
} from '../redux/reducers/doctors.reducer';

const fetchDoctorsData = async (dispatch) => {
  dispatch(loadingGetDoctorAction({}));
  await axiosInstance
    .get('/users')
    .then(({ data }) => {
      dispatch(
        getDoctorAction(
          data.data.rows.filter((user) => user.userType === 'THERAPIST'),
        ),
      );
    })
    .catch(({ message }) => {
      dispatch(doctorErrorAction(message));
    });
};

export default fetchDoctorsData;

