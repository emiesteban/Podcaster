import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import usePodcastContext from '../../../contexts/usePodcastContext';
import EpisodeDetails from '../../organisms/episodeDetail/EpisodeDetail';
import PodcastDetails from '../../organisms/podcastDetails/PodcastDetails';
import PodcastList from '../../organisms/podcastList/PodcastList';
import './Home.css';

const Home = () => {
  const params = useParams();
  const { loadingEpisodes, loadingPodcasts } = usePodcastContext();

  const view = () => {
    if (params?.episodeid !== undefined && params?.podcastid !== undefined) {
      // episode with lateral podcast card
      return (
        <EpisodeDetails
          podcastId={params.podcastid}
          episodeId={params.episodeid}
        />
      );
    } else if (params?.podcastid !== undefined) {
      // episode list with lateral podcast card
      return <PodcastDetails podcastId={params.podcastid} />;
    }
    // list of podcast cards
    return <PodcastList />;
  };

  return (
    <div className="home">
      <div className="header">
        <h1 className="header-text">
          <Link to={'/'}>Podcaster</Link>
        </h1>
        {(loadingEpisodes || loadingPodcasts) && (
          <div className="loader">
            <ClipLoader size={20} color={'#123abc'} />
          </div>
        )}
      </div>
      <div className="divider" />
      {view()}
    </div>
  );
};

export default Home;
