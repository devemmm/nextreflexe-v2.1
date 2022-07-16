import * as yup from 'yup';

export const createVisitSchema = yup.object().shape({
  patient: yup.string().required('patient is required'),
  branch: yup.string().required('branch is required'),
  doctor: yup.string().required('doctor is required'),
  time: yup.string().required('time is required'),
  service: yup.string().required('service is required'),
});

