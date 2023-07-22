import * as yup from 'yup';
import { emailRegexPattern } from '../utils/regexPatterns';

export const registerPatientSchema = yup.object().shape({
  fname: yup.string().required('first name is required'),
  lname: yup.string().required('last name is required'),
  email: yup
    .string()
    .matches(emailRegexPattern, 'invalid email')
    .required('email is required'),
  phone: yup
    .string()
    .min(10, 'invalid phone number')
    .max(13, 'invalid phone number')
    .required('phone number is required'),
  nid: yup
    .string()
    .length(16, 'invalid national ID')
    .required('national Id is required'),
  dob: yup.string().required('birth date is required'),
  country: yup.string().required('country is required'),
  province: yup.string().required('province is required'),
  district: yup.string().required('district is required'),
  sector: yup.string().required('sector is required'),
  cell: yup.string().required('cell is required'),
  village: yup.string().required('village is required'),
});

