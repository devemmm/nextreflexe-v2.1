import * as yup from 'yup';

export const directPaymentSchema = yup.object().shape({
  serviceId: yup.string().required('service is required'),
  sessionPrice: yup.number().required('Session Price is required'),
  pay: yup.number().required('amount is required'),
  totalSession: yup.number().required('total session paid is required'),
  paymentMethod: yup.string().required('Payment Method is required'),
  status: yup.string().required('Status is required'),
});

export const prePaidPaymentSchema = yup.object().shape({
  pay: yup.number(),
  serviceId: yup.string().required('service is required'),
  sessionPrice: yup.number().required('Session Price is required'),
  status: yup.string().required('Status is required'),
});

