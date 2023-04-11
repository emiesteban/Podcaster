import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('renders the children text', () => {
    const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });

  it('disables the button when the disabled prop is true', () => {
    const { getByText } = render(
      <Button onClick={() => {}} disabled>
        Click me
      </Button>
    );
    const buttonElement = getByText('Click me') as HTMLButtonElement;
    expect(buttonElement.disabled).toBe(true);
  });

  it('does not call the onClick function when the button is disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
