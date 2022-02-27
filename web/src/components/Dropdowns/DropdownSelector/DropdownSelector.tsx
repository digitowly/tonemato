import { FieldArray, useFormikContext } from 'formik';
import React, { ReactElement } from 'react';
import { Instrument } from '../../../generated/codegen_types';
import NewFieldButton from '../../Buttons/NewFieldButton/NewFieldButton';
import Removeable from '../../Forms/FormComponents/Removeable/Removeable';

export type dataList = Pick<Instrument, 'name' | 'id'>[];

interface DropdownSelectorProps {
    dataList: dataList;
    isEditMode: boolean;
    name: string;
    renderDefault: (formData: dataList) => any;
    renderEditable: (
        index: number,
        formData: dataList,
        isEditMode: boolean
    ) => ReactElement<any, any>;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
    dataList,
    isEditMode,
    name,
    renderDefault,
    renderEditable,
}) => {
    const onSubmit = ({ formData }) => {
        console.log('submit', formData);
        // handleSubmit(formData.map(inst => inst.id));
    };

    const { values } = useFormikContext();

    return (
        <div>
            {isEditMode ? (
                <>
                    <FieldArray name={name}>
                        {arrayHelpers => (
                            <>
                                {values[`${name}`].map((_, index) => (
                                    <Removeable
                                        key={index}
                                        onRemove={() =>
                                            arrayHelpers.remove(index)
                                        }>
                                        {renderEditable(
                                            index,
                                            values[`${name}`],
                                            isEditMode
                                        )}
                                    </Removeable>
                                ))}
                                <NewFieldButton
                                    preventDefault
                                    onClick={() => arrayHelpers.push('')}
                                />
                            </>
                        )}
                    </FieldArray>
                </>
            ) : (
                renderDefault(dataList)
            )}
        </div>
        //     )}
        // </Formik>
    );
};

export default DropdownSelector;
