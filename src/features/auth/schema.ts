import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required(),
  dob: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required()
})