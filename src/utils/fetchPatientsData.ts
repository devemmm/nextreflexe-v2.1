import axiosInstance from '../axios.instance';
import {
  patientsErrorAction,
  getPatientsAction,
  loadingGetPatientsAction,
} from '../redux/reducers/patients.reducer';

const fetchPatientsData = async (dispatch) => {
  dispatch(loadingGetPatientsAction());
  await axiosInstance
    .get('/patients')
    .then(({ data }) => {
      dispatch(getPatientsAction(data.data.rows));
    })
    .catch((error) => {
      dispatch(patientsErrorAction(error.message));
    });
};

export default fetchPatientsData;

