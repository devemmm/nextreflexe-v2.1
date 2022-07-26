import * as yup from 'yup';

export const createAppointmentSchema = yup.object().shape({
  startTime: yup.string().required('start time is required'),
  branch: yup.string().required('branch is required'),
  doctor: yup.string().required('doctor is required'),
  patient: yup.string().required('patient is required'),
  service: yup.string().required('service is required'),
});

export const startVisitSchema = yup.object().shape({
  branch: yup.string().required('branch is required'),
  doctor: yup.string().required('doctor is required'),
  time: yup.string().required('time is required'),
  service: yup.string().required('service is required'),
});

