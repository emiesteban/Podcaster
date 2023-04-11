import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import { assemblePodcastList } from '../../../helpers/datamanagement';
import PodcastListMock from '../../../mocks/PodcastListMock';
import PodcastList from './PodcastList';

jest.mock('../../../hooks/usePodcastList');
jest.mock('../../../contexts/usePodcastContext');

const mockContext = {
  podcastList: assemblePodcastList(PodcastListMock),
  search: '',
  setSearch: jest.fn(),
  setPodcastList: jest.fn(),
  setLoadingPodcasts: jest.fn(),
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe('PodcastList', () => {
  beforeEach(() => {
    (usePodcastContext as jest.Mock).mockReturnValue(mockContext);
  });

  test('renders input and podcasts', () => {
    render(<PodcastList />);

    const input = screen.getByPlaceholderText('Filter podcasts...');
    const podcasts = screen.queryAllByTestId('podcast-card');

    expect(input).toBeInTheDocument();
    expect(podcasts.length).toBe(3);
  });

  test('filters podcasts', () => {
    const { rerender } = render(<PodcastList />);
    const input = screen.getByPlaceholderText('Filter podcasts...');

    fireEvent.change(input, { target: { value: 'Joe' } });
    mockContext.search = 'Joe';
    expect(mockContext.setSearch).toHaveBeenCalledWith('Joe');
    rerender(<PodcastList />);
    expect((input as HTMLInputElement).value).toBe('Joe');
    const podcasts = screen.queryAllByTestId('podcast-card');

    expect(podcasts.length).toBe(1);
  });

  test('shows "No results" message', () => {
    const { rerender } = render(<PodcastList />);

    const input = screen.getByPlaceholderText('Filter podcasts...');

    fireEvent.change(input, { target: { value: 'invalid search' } });
    expect(mockContext.setSearch).toHaveBeenCalledWith('invalid search');
    mockContext.search = 'invalid search';
    rerender(<PodcastList />);
    const message = screen.getByText('No results');

    expect(message).toBeInTheDocument();
  });
});
