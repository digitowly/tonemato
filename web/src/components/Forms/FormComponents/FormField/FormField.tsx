import { Field } from 'formik';
import { useState } from 'react';
import * as S from './FormField.style';

type InputType = 'text' | 'password';
type FieldType = 'natural' | 'labeled';

interface FormFieldProps {
    id: string;
    value: string;
    name: string;
    type: InputType;
    fieldType: FieldType;
    placeholder?: string;
    as?: string;
    onChange: (e: Event) => void;
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    value,
    name,
    type = 'text',
    as = 'input',
    onChange,
    placeholder,
    fieldType,
}) => {
    const [isActive, setActive] = useState(false);
    const handleBlur = () => !value && setActive(false);
    const FieldElement = (
        <Field
            as={as}
            id={id}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={() => setActive(true)}
            onBlur={handleBlur}></Field>
    );

    if (fieldType === 'labeled') {
        return (
            <label htmlFor={id}>
                <S.FormFieldLabWrapper>
                    <S.FormFieldLabLabelWrapper>
                        <S.FormFieldLabLabelName isActive={isActive}>
                            {name}
                        </S.FormFieldLabLabelName>
                        {FieldElement}
                    </S.FormFieldLabLabelWrapper>
                </S.FormFieldLabWrapper>
            </label>
        );
    }

    if (fieldType === 'natural') {
        return (
            <S.FormFieldNatWrapper type={as}>
                {FieldElement}
            </S.FormFieldNatWrapper>
        );
    }
};

export default FormField;
