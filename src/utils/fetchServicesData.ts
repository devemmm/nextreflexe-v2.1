import axiosInstance from '../axios.instance';

import {
  getServicesAction,
  loadingGetServicesAction,
  servicesErrorAction,
} from '../redux/reducers/services.reducer';

const fetchServicesData = async (dispatch) => {
  dispatch(loadingGetServicesAction());
  await axiosInstance
    .get('/services')
    .then(({ data }) => {
      dispatch(getServicesAction(data.data.rows));
    })
    .catch((error) => {
      dispatch(servicesErrorAction(error.message));
    });
};

export default fetchServicesData;

