import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePodcastContext from '../../../contexts/usePodcastContext';
import { mssecondsToTime } from '../../../helpers/datetime';
import useEpisodeList from '../../../hooks/useEpisodeList';
import usePodcastList from '../../../hooks/usePodcastList';
import PodcastCard from '../../molecules/podcastCard/PodcastCard';
import './PodcastDetails.css';

const PodcastDetails = ({ podcastId }: { podcastId: string }) => {
  const {
    podcastList,
    setPodcastList,
    episodeList,
    setEpisodeList,
    setLoadingEpisodes,
    setLoadingPodcasts,
  } = usePodcastContext();

  const filtered =
    podcastList?.list.filter((elem) => elem.id === podcastId) || [];

  useEffect(() => {
    useEpisodeList(podcastId, episodeList, setEpisodeList, setLoadingEpisodes);
    usePodcastList(podcastList, setPodcastList, setLoadingPodcasts);
  }, []);

  return (
    <>
      {filtered && filtered.length == 1 && (
        <div className="detail">
          <PodcastCard podcast={filtered[0]} showSummary={true} />
          <div className="tableContainer">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan={3}>
                    Episodes: {episodeList[podcastId]?.resultsCount}{' '}
                  </th>
                </tr>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {episodeList?.[podcastId]?.list &&
                  episodeList?.[podcastId]?.list.map((episode) => (
                    <tr key={episode?.trackId}>
                      <td>
                        <Link
                          to={`/podcast/${podcastId}/episode/${episode?.trackId}`}
                          data-testid="episodelink"
                        >
                          {episode?.trackName}
                        </Link>
                      </td>
                      <td>
                        {new Date(episode?.releaseDate).toLocaleDateString()}
                      </td>
                      <td>{mssecondsToTime(episode?.trackTimeMillis)}</td>
                    </tr>
                  ))}
                {!episodeList?.[podcastId]?.list && (
                  <tr>
                    <td>EPISODE LIST NOT AVAILABLE</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {(!filtered || filtered.length !== 1) && <h1>Invalid Podcast</h1>}
    </>
  );
};

export default PodcastDetails;
