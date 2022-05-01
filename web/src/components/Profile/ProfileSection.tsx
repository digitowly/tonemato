import { Formik, FormikValues } from 'formik';
import { useState } from 'react';
import { Colors } from '../../styles/Colors';
import FormField from '../Forms/FormComponents/FormField/FormField';
import * as S from './Profile.style';

interface ProfileSectionProps {
    initialValues: FormikValues;
    render: (isEditMode: boolean) => JSX.Element;
    isGrey?: boolean;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
    isGrey,
    initialValues,
    render,
}) => {
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <S.ProfileSection isGrey={isGrey}>
            {isEditMode ? (
                <button onClick={() => setIsEditMode(false)}>cancel</button>
            ) : (
                <button onClick={() => setIsEditMode(true)}>edit</button>
            )}
            <Formik
                initialValues={initialValues}
                onSubmit={values => console.log(values)}>
                {({ handleSubmit, values }) => (
                    <>
                        {render(isEditMode)}

                        {isEditMode && (
                            <button
                                type='submit'
                                onClick={() => {
                                    setIsEditMode(false);
                                    handleSubmit();
                                }}>
                                submit
                            </button>
                        )}
                    </>
                )}
            </Formik>
        </S.ProfileSection>
    );
};

interface ProfileSectionInputProps {
    isEditMode: boolean;
    title: string;
    name: string;
    value: string;
}

export const ProfileSectionInput: React.FC<ProfileSectionInputProps> = ({
    isEditMode,
    title,
    value,
    name,
}) => {
    return (
        <S.ProfileSectionInputWrapper>
            <b>{title}</b>
            <S.ProfileSectionInputField>
                {isEditMode ? (
                    <FormField
                        fieldType='natural'
                        type='text'
                        backgroundColor={Colors.white}
                        name={name}
                    />
                ) : (
                    <p>{value}</p>
                )}
            </S.ProfileSectionInputField>
        </S.ProfileSectionInputWrapper>
    );
};

export default ProfileSection;
