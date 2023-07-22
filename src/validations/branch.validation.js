import * as yup from 'yup';

export const branchSchema = yup.object().shape({
  id: yup.string().required('id is required'),
  name: yup.string().required('name is required'),
  country: yup.string().required('country is required'),
  province: yup.string().required('province is required'),
  district: yup.string().required('district is required'),
  sector: yup.string().required('sector is required'),
  cell: yup.string().required('cell is required'),
  village: yup.string().required('village is required'),
});

