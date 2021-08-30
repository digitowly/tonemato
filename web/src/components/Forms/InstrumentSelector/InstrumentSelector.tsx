import React from 'react';
import { FieldArray, Form, Formik } from 'formik';
import { Instrument } from '../../../generated/codegen_types';
import InstrumentFilterDropdown from '../../Dropdowns/InstrumentFilterDropdown/InstrumentFilterDropdown';

interface InstrumentSelectorProps {
  instrumentsData: Pick<Instrument, 'name' | 'id'>[];
}

const InstrumentSelector: React.FC<InstrumentSelectorProps> = ({
  instrumentsData,
}) => {
  const instrumentsPreFiler = instrumentsData.map(
    (instrument) => instrument.name
  );

  return (
    <div>
      <Formik
        initialValues={{ instruments: [] }}
        onSubmit={({ instruments }) => console.log(instruments)}>
        {({ values }) => (
          <Form>
            <FieldArray name='instruments'>
              {(arrayHelpers) => (
                <>
                  {values.instruments.map((_, index) => (
                    <div style={{ display: 'flex' }} key={index}>
                      <InstrumentFilterDropdown
                        name={`instruments.${index}`}
                        preFilter={[
                          ...instrumentsPreFiler,
                          ...values.instruments,
                        ]}
                      />
                      <button onClick={() => arrayHelpers.remove(index)}>
                        remove
                      </button>
                    </div>
                  ))}
                  <a
                    onClick={() =>
                      arrayHelpers.insert(values.instruments.length, '')
                    }>
                    add
                  </a>
                </>
              )}
            </FieldArray>
            <button type='submit'>submit instruments</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InstrumentSelector;
