import * as yup from 'yup';

export const directPaymentSchema = yup.object().shape({
  patientId: yup.string().required('patient is required'),
  serviceId: yup.string().required('service is required'),
  visitId: yup.string().required('visit ID is required'),
  sessionPrice: yup.string().required('Session Price is required'),
  pay: yup.string().required('amount is required'),
  totalSession: yup.string().required('total session paid is required'),
  paymentMethod: yup.string().required('Payment Method is required'),
  status: yup.string().required('Status is required'),
});

export const prePaidPaymentSchema = yup.object().shape({
  patient: yup.string().required('patient is required'),
  service: yup.string().required('service is required'),
  sessionPrice: yup.string().required('Session Price is required'),
  status: yup.string().required('Status is required'),
});

