import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ClipLoader } from "react-spinners";
import usePodcastContext from '../../../contexts/usePodcastContext';
import { yesterday } from '../../../helpers/datetime';
import { getPodcastList } from '../../../services/apiRequests';
import EpisodeDetails from '../../organisms/episodeDetail/EpisodeDetail';
import PodcastDetails from '../../organisms/podcastDetails/PodcastDetails';
import PodcastList from '../../organisms/podcastList/PodcastList';

const Home = () => {
  const params = useParams();
  const {
          podcastList,
          setPodcastList,
          episodeList,
          setEpisodeList,
          loadingEpisodes,
          loadingPodcasts,
          setLoadingPodcasts
  } = usePodcastContext();

  useEffect(() => {
    if ((podcastList?.timestamp || 0) < yesterday) {
      getPodcastList({setPodcastList, setLoadingPodcasts});
    }
  }, []);

  const view = () => {
    if (params?.episodeid !== undefined) {
        // episode with lateral podcast card
        return <EpisodeDetails podcastId={params.podcastid} episodeId={params.episodeid}/>;
    } else if (params?.podcastid !== undefined) {
        // episode list with lateral podcast card
        return <PodcastDetails podcastId={params.podcastid} />; 
    }
    // list of podcast cards
    return <PodcastList />;
  }

  return (
    <div className="home">
      <div className="header">
        <div>
          <h2><Link to={'/'}>Podcaster</Link></h2>
        </div>
        <div>
          {(loadingEpisodes || loadingPodcasts) && <ClipLoader size={50} color={"#123abc"} />}
        </div>
      </div>
        {view()}
    </div>
  );
};

export default Home;
