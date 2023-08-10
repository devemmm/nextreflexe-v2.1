import axiosInstance from '../axios.instance';

import {
  getPaymentsAction,
  loadingGetPaymentsAction,
  paymentsErrorAction,
} from '../redux/reducers/payments.reducer';

const fetchPaymentsData = async (dispatch) => {
  dispatch(loadingGetPaymentsAction());
  await axiosInstance
    .get('/payments')
    .then(({ data }) => {
      dispatch(getPaymentsAction(data.data.rows));
    })
    .catch((error) => {
      dispatch(paymentsErrorAction(error.message));
    });
};

export default fetchPaymentsData;

