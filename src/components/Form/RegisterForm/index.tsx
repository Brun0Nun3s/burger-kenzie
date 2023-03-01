import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../Providers/UserContext';

interface iRegister {
  email: string;
  password: string;
  name: string;
  passwordConfirmed:string;
  message?:string;
}


const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<iRegister>({
    resolver: yupResolver(schema),
  });
  const { Register } = useContext(UserContext);
  const submit :SubmitHandler<iRegister> = (formData) => {
    Register(formData);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        placeholder='Informe seu nome'
        label='Usuario'
        register={register('name')}
        errors={errors.name}
      />
      <Input
        type='email'
        placeholder='Informe seu e-mail'
        label='E-mail'
        register={register('email')}
        errors={errors.email}
      />
      <Input
        type='password'
        placeholder='Informe uma senha'
        label='Senha'
        register={register('password')}
        errors={errors.password}
      />
      <Input
        type='password'
        placeholder='Confirme sua senha'
        label='Confirmação de Senha'
        register={register('passwordConfirmed')}
        errors={errors.passwordConfirmed}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
