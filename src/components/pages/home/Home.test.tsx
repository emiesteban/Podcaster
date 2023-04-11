import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import Home from './Home';

jest.mock('../../organisms/header/Header', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

jest.mock('../../organisms/podcastlist/Podcastlist', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe('Home', () => {
  test('should render the Home component', () => {
    render(<Home />);
    const homeContainer = screen.getByTestId('home');
    expect(homeContainer).toBeInTheDocument();
  });
});
