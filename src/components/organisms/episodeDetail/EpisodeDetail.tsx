import React, { useEffect } from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import useEpisodeList from '../../../hooks/useEpisodeList';
import usePodcastList from '../../../hooks/usePodcastList';
import PodcastCard from '../../molecules/podcastCard/PodcastCard';
import './EpisodeDetail.css';

const EpisodeDetail = ({
  podcastId,
  episodeId,
}: {
  podcastId: string;
  episodeId: string;
}) => {
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
  const filteredEpisode =
    episodeList?.[podcastId || 0]?.list.filter(
      (elem) => elem.trackId === parseInt(episodeId || '0')
    ) || [];

  useEffect(() => {
    useEpisodeList(podcastId, episodeList, setEpisodeList, setLoadingEpisodes);
    usePodcastList(podcastList, setPodcastList, setLoadingPodcasts);
  }, []);

  const createMarkup = () => {
    return { __html: filteredEpisode[0]?.description };
  };

  return (
    <div className='episodeDetailContainer'>
      {filtered && filtered.length == 1 && (
        <div className="episode">
          <PodcastCard podcast={filtered[0]} showSummary={true} />
          <div className="episodeTableContainer">
            {filteredEpisode[0] && (
              <div>
                <h2>{filteredEpisode[0]?.trackName}</h2>
                <p>{filteredEpisode[0]?.description}</p>
                <div dangerouslySetInnerHTML={createMarkup()} />
                <h3>Preview:</h3>
                <audio
                  data-testid="audio"
                  controls
                  src={filteredEpisode[0].previewUrl}
                />
                {!filteredEpisode[0].previewUrl && (
                  <h4>Preview not Available</h4>
                )}
              </div>
            )}
            {!filteredEpisode[0] && <h4>EPISODE NOT AVAILABLE</h4>}
          </div>
        </div>
      )}
      {(!filtered || filtered.length !== 1) && <h1>Invalid Podcast</h1>}
    </div>
  );
};

export default EpisodeDetail;
