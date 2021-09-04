import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BaseDropdown, { BaseDropdownElement } from './BaseDropdown';
import { Form, Formik } from 'formik';

describe('BaseDropdown', () => {
  test('select item', async () => {
    const INIT_VALUE = 'placeholder';
    const SELECT_VALUE = 'this is a selection';

    const handleSubmit = jest.fn();

    const { debug } = render(
      <Formik
        initialValues={{ dropdownSelection: INIT_VALUE }}
        onSubmit={(values) => handleSubmit(values)}>
        <Form>
          <BaseDropdown name='dropdownSelection'>
            <BaseDropdownElement
              name={'dropdownSelection'}
              value={SELECT_VALUE}>
              <div>custom test option</div>
            </BaseDropdownElement>
          </BaseDropdown>
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    );

    const option = screen.getByTestId('basedropdown-element');
    expect(option).toBeInTheDocument();

    const dropdownSelect = screen.getByTestId('basedropdown-select');
    expect(dropdownSelect).toBeInTheDocument();

    expect(dropdownSelect).toHaveTextContent(INIT_VALUE);
    userEvent.click(dropdownSelect);
    expect(dropdownSelect).toHaveTextContent(INIT_VALUE);

    userEvent.click(option);
    expect(dropdownSelect).toHaveTextContent(SELECT_VALUE);

    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(handleSubmit).toBeCalledTimes(1);
      expect(handleSubmit).toHaveBeenCalledWith({
        dropdownSelection: SELECT_VALUE,
      });
    });
  });
});
