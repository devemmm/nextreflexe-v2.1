import * as yup from 'yup';

export const createVisitSchema = yup.object().shape({
  patientId: yup.string().required('patient is required'),
  branchId: yup.string().required('branch is required'),
  userId: yup.string().required('doctor is required'),
  time: yup.number().required('time is required'),
  serviceId: yup.string().required('service is required'),
});

