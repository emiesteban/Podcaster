import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import Podcast from './Podcast';

jest.mock('../../organisms/header/Header', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

jest.mock('../../organisms/podcastDetails/PodcastDetails', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe('Home', () => {
  test('should render the Podcast component', () => {
    render(<Podcast />);
    const homeContainer = screen.getByTestId('podcast');
    expect(homeContainer).toBeInTheDocument();
  });
});
