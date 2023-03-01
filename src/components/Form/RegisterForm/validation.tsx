import * as yup from 'yup';


export const schema = yup
  .object({
    name: yup.string().required('Informe seu nome'),
    email: yup.string().required('Informe seu E-mail'),
    password: yup
      .string()
      .required('Informe uma senha')
      .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres'),
    passwordConfirmed: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'confirmação de senha deve ser igual a senha'
      )
      .required('Confirmação de senha obrigatória'),
  })
  .required();

export default schema;
