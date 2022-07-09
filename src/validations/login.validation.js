import * as yup from 'yup';

const regexPassword = /^(?=.*[A-Z])(?=.*[0-9])\w{8,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('email is required'),
  password: yup
    .string()
    .matches(
      regexPassword,
      'Only letters (lower + upper), and numbers are allowed',
    ),
});

export const signupSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .matches(
      regexPassword,
      'Only letters (lower + upper), and numbers are allowed',
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
