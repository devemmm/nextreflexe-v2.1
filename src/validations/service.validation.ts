import * as yup from 'yup';

export const serviceSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  icon: yup.string().required('an icon is required'),
  description: yup.string().required('description is required'),
});

