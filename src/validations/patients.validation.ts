import * as yup from 'yup';
import { emailRegexPattern } from '../utils/regexPatterns';

export const registerPatientSchema = yup.object().shape({
  fname: yup.string().required('first name is required'),
  lname: yup.string().required('last name is required'),
  email: yup
    .string()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .matches(emailRegexPattern, 'invalid email')
    .nullable(),
  // .required('email is required'),
  phone: yup
    .string()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .min(10, 'invalid phone number')
    .max(10, 'invalid phone number')
    .nullable(),
  // .required('phone number is required'),
  password: yup.string().required('password is required'),
  nid: yup
    .string()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .length(16, 'invalid national ID')
    .nullable(),
  // .required('national Id is required'),
  // branchId: yup.string().required('branch is required'),
  // userId: yup.string().required('doctor is required'),
  // serviceId: yup.string().required('service is required'),
  dob: yup.string().required('birth date is required'),
  country: yup.string().required('country is required'),
  province: yup.string().required('province is required'),
  district: yup.string().required('district is required'),
  sector: yup.string().required('sector is required'),
  cell: yup.string().required('cell is required'),
  village: yup.string().required('village is required'),
});

