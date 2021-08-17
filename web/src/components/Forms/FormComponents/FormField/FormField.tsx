import { Field } from 'formik';
import { useState } from 'react';
import * as S from './FormField.style';

type InputType = 'text' | 'password';

interface FormFieldProps {
  id: string;
  value: string;
  name: string;
  type?: InputType;
  onChange: (e: Event) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  value,
  name,
  type = 'text',
  onChange,
}) => {
  const [isActive, setActive] = useState(false);
  const handleBlur = () => !value && setActive(false);
  return (
    <S.FormFieldWrapper>
      <S.FormFieldLabelWrapper>
        <label htmlFor={id}>
          <S.FormFieldLabelName isActive={isActive}>
            {name}
          </S.FormFieldLabelName>
          <Field
            id={id}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            onFocus={() => setActive(true)}
            onBlur={handleBlur}></Field>
        </label>
      </S.FormFieldLabelWrapper>
    </S.FormFieldWrapper>
  );
};

export default FormField;
