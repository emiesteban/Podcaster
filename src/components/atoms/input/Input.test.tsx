import { fireEvent, render } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import Input from './Input';

describe('Input component', () => {
  it('renders label if passed as prop', () => {
    const { getByText } = render(
      <Input label="Name" value="" onChange={() => {}} />
    );
    expect(getByText('Name')).toBeInTheDocument();
  });

  it('calls onChange callback when input value is changed', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Input value="hello" onChange={handleChange} />
    );
    const inputElement = getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'world' } });
    expect(handleChange).toHaveBeenCalledWith('world');
  });
});
