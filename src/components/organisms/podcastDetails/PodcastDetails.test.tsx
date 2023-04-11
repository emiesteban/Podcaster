import { render, screen } from '@testing-library/react';
import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import {
  assembleEpisodeList,
  assemblePodcastList,
} from '../../../helpers/datamanagement';
import { mssecondsToTime } from '../../../helpers/datetime';
import useEpisodeList from '../../../hooks/useEpisodeList';
import usePodcastList from '../../../hooks/usePodcastList';
import EpisodeListMock from '../../../mocks/EpisodeListMock';
import PodcastListMock from '../../../mocks/PodcastListMock';
import PodcastDetails from './PodcastDetails';

jest.mock('../../../contexts/usePodcastContext');

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

jest.mock('../../../hooks/useEpisodeList');
jest.mock('../../../hooks/usePodcastList');
jest.mock('../../../helpers/datetime');

describe('PodcastDetails', () => {
  beforeEach(() => {
    (usePodcastContext as jest.Mock).mockReturnValue(mockContext);
  });

  test('should render podcast and episode list when given a valid podcastId', () => {
    const podcast = podcastList.list[0];
    render(<PodcastDetails podcastId={podcast.id} />);

    const podcastTitle = screen.getByText(podcast.artist);
    const episodeTitle = screen.getByText(
      episodeList[podcast.id].list[0].trackName
    );
    const episode1Title = screen.getByText(
      episodeList[podcast.id].list[1].trackName
    );
    const episode2Title = screen.getByText(
      episodeList[podcast.id].list[2].trackName
    );
    const episode3Title = screen.getByText(
      episodeList[podcast.id].list[3].trackName
    );

    expect(podcastTitle).toBeInTheDocument();
    expect(episodeTitle).toBeInTheDocument();
    expect(episode1Title).toBeInTheDocument();
    expect(episode2Title).toBeInTheDocument();
    expect(episode3Title).toBeInTheDocument();
    expect(mssecondsToTime).toHaveBeenCalledTimes(4);
  });

  test('should render error message when given an invalid podcastId', async () => {
    render(<PodcastDetails podcastId="XYZ" />);

    const errorMessage = screen.getByText('Invalid Podcast');

    expect(errorMessage).toBeInTheDocument();
  });

  test('should call getEpisodeList with correct parameters when episodeList is empty', async () => {
    render(<PodcastDetails podcastId={'test'} />);

    expect(useEpisodeList).toHaveBeenCalledWith(
      'test',
      episodeList,
      mockContext.setEpisodeList,
      mockContext.setLoadingEpisodes
    );
    expect(usePodcastList).toHaveBeenCalledWith(
      podcastList,
      mockContext.setPodcastList,
      mockContext.setLoadingPodcasts
    );
  });
});
