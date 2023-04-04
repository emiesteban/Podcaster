import { render } from '@testing-library/react';
import React from 'react';
import { PodcastProps } from '../../../types/index';
import PodcastCard from './PodcastCard';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe('PodcastCard', () => {
  const podcast: PodcastProps = {
    id: '1',
    artist: 'Test Artist',
    name: 'Test Podcast',
    image: 'https://example.com/image.png',
    summary: 'Test summary',
  };

  it('renders podcast information', () => {
    const { getByText, getByAltText } = render(<PodcastCard podcast={podcast} />);
    const artistElement = getByText(podcast.artist);
    const nameElement = getByText(podcast.name);
    const imageElement = getByAltText('Avatar');

    expect(artistElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toEqual(podcast.image);
  });

  it('renders summary when showSummary is true', () => {
    const { getByText } = render(<PodcastCard podcast={podcast} showSummary={true} />);
    const summaryElement = getByText(podcast.summary);

    expect(summaryElement).toBeInTheDocument();
  });

  it('does not render summary when showSummary is false', () => {
    const { queryByText } = render(<PodcastCard podcast={podcast} showSummary={false} />);
    const summaryElement = queryByText(podcast.summary);

    expect(summaryElement).not.toBeInTheDocument();
  });
});