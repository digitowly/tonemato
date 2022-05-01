import { Field } from 'formik';
import { useMemo, useState } from 'react';
import { Colors } from '../../../../styles/Colors';
import * as S from './FormField.style';

type InputType = 'text' | 'password';
type FieldType = 'natural' | 'labeled';

interface FormFieldProps {
    id?: string;
    isLarge?: boolean;
    name: string;
    type: InputType;
    fieldType: FieldType;
    placeholder?: string;
    backgroundColor?: Colors;
    as?: string;
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    name,
    type = 'text',
    as = 'input',
    placeholder,
    isLarge = false,
    backgroundColor,
    fieldType,
}) => {
    const [isActive, setActive] = useState(false);
    const handleBlur = () => setActive(false);
    const FieldElement = useMemo(
        () => (
            <Field
                as={as}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onFocus={() => setActive(true)}
                onBlur={handleBlur}
            />
        ),
        [as, id, type, name, placeholder]
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
            <S.FormFieldNatWrapper
                type={as}
                isLarge={isLarge}
                backgroundColor={backgroundColor}>
                {FieldElement}
            </S.FormFieldNatWrapper>
        );
    }
};

export default FormField;
