import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import NotFound from './NotFound';

describe('Home', () => {
  test('should render the NotFound component', () => {
    render(<NotFound />);
    const message404 = screen.getByText('404 Not Found');
    expect(message404).toBeInTheDocument();
  });
});
