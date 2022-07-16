import axiosInstance from '../axios.instance';
import {
  userErrorAction,
  getUserAction,
  loadingGetUserAction,
} from '../redux/reducers/user.reducer';

const fetchUserData = async (dispatch) => {
  dispatch(loadingGetUserAction({}));
  await axiosInstance
    .get('/users')
    .then(({ data }) => {
      dispatch(getUserAction(data.data.rows));
    })
    .catch((error) => {
      dispatch(userErrorAction(error.message));
    });
};

export default fetchUserData;

