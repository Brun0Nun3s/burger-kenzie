import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import schema from './validation';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { UserContext } from '../../../Providers/UserContext';

interface iLogin {
  email: string;
  password: string;
}
const LoginForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<iLogin>({
    resolver: yupResolver(schema),
  });
  const { Login } = useContext(UserContext);
  const submit: SubmitHandler<iLogin> = (formData) => {
    Login(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='E-mail'
        type='email'
        placeholder='Informe seu e-mail'
        register={register('email')}
        errors={errors.email}
      />
      <Input
        type='password'
        placeholder='******'
        label='Senha'
        register={register('password')}
        errors={errors.password}
      />

      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};
export default LoginForm;
