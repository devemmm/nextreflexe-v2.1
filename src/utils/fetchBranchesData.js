import axiosInstance from '../axios.instance';
import {
  branchesErrorAction,
  getBranchesAction,
  loadingGetBranchesAction,
} from '../redux/reducers/branches.reducer';

const fetchBranchesData = async (dispatch) => {
  dispatch(loadingGetBranchesAction({}));
  await axiosInstance
    .get('/branches')
    .then(({ data }) => {
      dispatch(getBranchesAction(data.data.rows));
    })
    .catch((error) => {
      dispatch(branchesErrorAction(error.message));
    });
};

export default fetchBranchesData;

