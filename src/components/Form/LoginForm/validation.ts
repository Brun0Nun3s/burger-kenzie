import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup.string().required('Informe seu E-mail'),
    password: yup.string().required('Informe uma senha'),
  })
  .required();

export default schema;
