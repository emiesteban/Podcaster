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
    <div className='podcastDetailContainer'>
      {filtered && filtered.length == 1 && (
        <div className="detail">
          <PodcastCard podcast={filtered[0]} showSummary={true} />
          <div>
            <div className="episodeCount">
              Episodes: {episodeList[podcastId]?.resultsCount}
            </div>
            <div className="podcastTableContainer">
              <div className="row">
                <div className="firsttitlecell">Title</div>
                <div className="titlecell">Date</div>
                <div className="titlecell">Duration</div>
              </div>
              {episodeList?.[podcastId]?.list &&
                episodeList?.[podcastId]?.list.map((episode, index) => (
                  <div className="row" key={episode?.trackId}>
                    <div className={`firstcell ${index % 2 === 0 ? '' : 'pair'}`}>
                      <Link
                        to={`/podcast/${podcastId}/episode/${episode?.trackId}`}
                        data-testid="episodelink"
                      >
                        {episode?.trackName}
                      </Link>
                    </div>
                    <div className={`cell ${index % 2 === 0 ? '' : 'pair'}`}>
                      {new Date(episode?.releaseDate).toLocaleDateString()}
                    </div>
                    <div className={`cell ${index % 2 === 0 ? '' : 'pair'}`}>
                      {mssecondsToTime(episode?.trackTimeMillis)}
                    </div>
                  </div>
                ))}
              {!episodeList?.[podcastId]?.list && (
                <div>
                  <p>EPISODE LIST NOT AVAILABLE</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {(!filtered || filtered.length !== 1) && <h1>Invalid Podcast</h1>}
    </div>
  );
};
export default PodcastDetails;
