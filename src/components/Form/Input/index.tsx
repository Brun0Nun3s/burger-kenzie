import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputValuesProps {
  type: string;
  placeholder: string;
  label: string;
  errors?: FieldError;
  register: UseFormRegisterReturn;
 
}
const Input = ({
  type,
  placeholder,
  label,
  errors,
  register,
 
}: IInputValuesProps) => (
  <fieldset>
    <StyledTextField
      label={label}
      type={type}
      placeholder={placeholder}
      {...register}
    />
    {errors ? (
      <StyledParagraph fontColor='red'>{errors.message}</StyledParagraph>
    ) : undefined}
  </fieldset>
);

export default Input;
