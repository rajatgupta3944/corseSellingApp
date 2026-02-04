import * as yup from "yup"

export const schema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
    .min(3, 'Minimum 3 characters required')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  details: yup.string().required('Details are required'),
})