import { render, screen } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import Header from './Header';

jest.mock('../../../contexts/usePodcastContext');

const mockContext = {
  loadingPodcasts: false,
  loadingEpisodes: false,
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe('Header', () => {
  beforeEach(() => {
    (usePodcastContext as jest.Mock).mockReturnValue(mockContext);
  });

  test('when there´s no data loading should render component', () => {
    render(<Header />);
    const loader = screen.queryByTestId('loader');
    expect(loader).toBeNull();
    const title = screen.getByText('Podcaster');
    expect(title).toBeInTheDocument();
  });

  test('when there´s data loading should render loader component', () => {
    mockContext.loadingEpisodes = true;
    const { rerender } = render(<Header />);
    let loader = screen.queryByTestId('loader');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('loader');

    // simulate the condition was changed, loader must not show
    mockContext.loadingEpisodes = false;
    rerender(<Header />);
    loader = screen.queryByTestId('loader');
    expect(loader).toBeNull();

    // simulate the other condition was changed, loader must show
    mockContext.loadingPodcasts = true;
    rerender(<Header />);
    loader = screen.queryByTestId('loader');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('loader');
  });
});
