import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import { assembleEpisodeList, assemblePodcastList } from '../../../helpers/datamanagement';
import EpisodeListMock from '../../../mocks/EpisodeListMock';
import PodcastListMock from '../../../mocks/PodcastListMock';
import { getEpisodeList } from '../../../services/apiRequests';
import EpisodeDetail from './EpisodeDetail';

jest.mock('../../../contexts/usePodcastContext');

const podcastList = assemblePodcastList(PodcastListMock)
const episodeList = {[podcastList.list[0].id]: assembleEpisodeList(EpisodeListMock)};

const mockContext = {
    podcastList: podcastList,
    episodeList: episodeList,
    setEpisodeList: jest.fn(),
    setLoadingEpisodes: jest.fn(),
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
    const podcast = podcastList.list[1]
    render(<EpisodeDetail podcastId={podcast.id} episodeId="1" />);
    expect(getEpisodeList).toHaveBeenCalledWith({
      podcastId: podcast.id,
      episodeList: episodeList,
      setEpisodeList: mockContext.setEpisodeList,
      setLoadingEpisodes: mockContext.setLoadingEpisodes
    });
    expect(screen.getByText('EPISODE NOT AVAILABLE')).toBeInTheDocument();
    expect(screen.queryByText('Test Episode')).not.toBeInTheDocument();
  });

  test('renders episode details', () => {
    const podcast = podcastList.list[0]
    const episode = episodeList[podcast.id].list[0]
    render(<EpisodeDetail podcastId={podcast.id} episodeId={episode.trackId} />);
    expect(screen.getByText(episode.trackName)).toBeInTheDocument();
    expect(screen.getByTestId('audio')).toHaveAttribute('src', episode.previewUrl);
  });

});
