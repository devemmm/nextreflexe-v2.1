import axiosInstance from '../axios.instance';
import {
  visitsErrorAction,
  getVisitsAction,
  loadingGetVisitsAction,
} from '../redux/reducers/visits.reducer';

const fetchVisitsData = async (dispatch) => {
  dispatch(loadingGetVisitsAction());
  await axiosInstance
    .get('/visits')
    .then(({ data }) => {
      dispatch(getVisitsAction(data.data.rows));
    })
    .catch((error) => {
      dispatch(visitsErrorAction(error.message));
    });
};

export default fetchVisitsData;

