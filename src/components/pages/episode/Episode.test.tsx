import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import Episode from './Episode';

jest.mock('../../organisms/header/Header', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

jest.mock('../../organisms/episodeDetail/EpisodeDetail', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe('Home', () => {
  test('should render the Episode component', () => {
    render(<Episode />);
    const homeContainer = screen.getByTestId('episode');
    expect(homeContainer).toBeInTheDocument();
  });
});
