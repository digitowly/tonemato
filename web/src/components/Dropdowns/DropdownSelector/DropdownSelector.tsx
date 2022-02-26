import { FieldArray, Form, Formik } from 'formik';
import React, { ReactElement, useState } from 'react';
import { Instrument } from '../../../generated/codegen_types';
import NewFieldButton from '../../Buttons/NewFieldButton/NewFieldButton';
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import Removeable from '../../Forms/FormComponents/Removeable/Removeable';

export type dataList = Pick<Instrument, 'name' | 'id'>[];

interface DropdownSelectorProps {
    dataList: dataList;
    handleSubmit: (ids: number[]) => Promise<void>;
    renderDefault: (formData: dataList) => any;
    renderEditable: (
        index: number,
        formData: dataList,
        isEditMode: boolean
    ) => ReactElement<any, any>;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
    dataList,
    handleSubmit,
    renderDefault,
    renderEditable,
}) => {
    const [isEditMode, setEditMode] = useState(false);

    const onSubmit = ({ formData }) => {
        console.log('submit', formData);
        handleSubmit(formData.map(inst => inst.id));
    };

    return (
        <Formik
            initialValues={{ formData: dataList }}
            onSubmit={({ formData }) => {
                console.log('submit', formData);
                // handleSubmit(formData.map((inst) => inst.id));
            }}>
            {({ values }) => (
                // <Form>
                <div>
                    <SecondaryButton
                        preventDefault
                        onClick={() => setEditMode(em => !em)}>
                        edit mode:{isEditMode.toString()}
                    </SecondaryButton>
                    {isEditMode ? (
                        <>
                            <FieldArray name='formData'>
                                {arrayHelpers => (
                                    <>
                                        {values.formData.map((_, index) => (
                                            <Removeable
                                                key={index}
                                                onRemove={() =>
                                                    arrayHelpers.remove(index)
                                                }>
                                                {renderEditable(
                                                    index,
                                                    values.formData,
                                                    isEditMode
                                                )}
                                            </Removeable>
                                        ))}
                                        <NewFieldButton
                                            preventDefault
                                            onClick={() =>
                                                arrayHelpers.push('')
                                            }
                                        />
                                    </>
                                )}
                            </FieldArray>
                            <button
                                onClick={e => {
                                    e.preventDefault();
                                    onSubmit(values);
                                }}>
                                submit instruments
                            </button>
                        </>
                    ) : (
                        renderDefault(values.formData)
                    )}
                </div>
                // </Form>
            )}
        </Formik>
    );
};

export default DropdownSelector;
