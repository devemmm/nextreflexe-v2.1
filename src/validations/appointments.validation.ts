import * as yup from 'yup';

export const createAppointmentSchema = yup.object().shape({
  startTime: yup.string().required('start time is required'),
  branchId: yup.string().required('branch is required'),
  userId: yup.string().required('doctor is required'),
  patientId: yup.string(),
  serviceId: yup.string().required('service is required'),
});

export const startVisitSchema = yup.object().shape({
  userId: yup.string().required('doctor is required'),
  time: yup.string().required('time is required'),
  serviceId: yup.string().required('service is required'),
});

