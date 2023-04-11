import { render, screen } from '@testing-library/react';
import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import {
  assembleEpisodeList,
  assemblePodcastList,
} from '../../../helpers/datamanagement';
import useEpisodeList from '../../../hooks/useEpisodeList';
import usePodcastList from '../../../hooks/usePodcastList';
import EpisodeListMock from '../../../mocks/EpisodeListMock';
import PodcastListMock from '../../../mocks/PodcastListMock';
import EpisodeDetail from './EpisodeDetail';

jest.mock('../../../contexts/usePodcastContext');
jest.mock('../../../hooks/usePodcastList');
jest.mock('../../../hooks/useEpisodeList');

const podcastList = assemblePodcastList(PodcastListMock);
const episodeList = {
  [podcastList.list[0].id]: assembleEpisodeList(EpisodeListMock),
};

const mockContext = {
  podcastList,
  episodeList,
  setEpisodeList: jest.fn(),
  setPodcastList: jest.fn(),
  setLoadingEpisodes: jest.fn(),
  setLoadingPodcasts: jest.fn(),
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

jest.mock('../../../services/apiRequests');

describe('EpisodeDetail component', () => {
  beforeEach(() => {
    (usePodcastContext as jest.Mock).mockReturnValue(mockContext);
  });

  test('renders episode not available message', () => {
    const podcast = podcastList.list[1];
    render(<EpisodeDetail podcastId={podcast.id} episodeId="1" />);
    expect(useEpisodeList).toHaveBeenCalledWith(
      podcast.id,
      episodeList,
      mockContext.setEpisodeList,
      mockContext.setLoadingEpisodes
    );
    expect(usePodcastList).toHaveBeenCalledWith(
      podcastList,
      mockContext.setPodcastList,
      mockContext.setLoadingPodcasts
    );
    expect(screen.getByText('EPISODE NOT AVAILABLE')).toBeInTheDocument();
    expect(screen.queryByText('Test Episode')).not.toBeInTheDocument();
  });

  test('renders episode details', () => {
    const podcast = podcastList.list[0];
    const episode = episodeList[podcast.id].list[0];
    render(
      <EpisodeDetail
        podcastId={podcast.id}
        episodeId={episode.trackId.toString()}
      />
    );
    expect(screen.getByText(episode.trackName)).toBeInTheDocument();
    expect(screen.getByTestId('audio')).toHaveAttribute(
      'src',
      episode.previewUrl
    );
  });
});
