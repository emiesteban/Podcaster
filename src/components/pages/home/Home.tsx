import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePodcastContext from '../../../contexts/usePodcastContext';
import PodcastListMock from '../../../mocks/PodcastListMock';
import EpisodeDetails from '../../organisms/episodeDetail/EpisodeDetail';
import PodcastDetails from '../../organisms/podcastDetails/PodcastDetails';
import PodcastList from '../../organisms/podcastList/PodcastList';

const Home = () => {
  const params = useParams();
  const dayInMilliseconds = 86400000;
  const yesterday = Date.now() - dayInMilliseconds;
  const {
          podcastList,
          setPodcastList,
          episodeList,
          setEpisodeList,
  } = usePodcastContext();

  useEffect(() => {
    console.log('useParams', params)
  }, [params]);

  const assemblePodcastList = ( listPodcast: any ) => {
    const newPodcastList = [];    
    listPodcast?.feed?.entry?.forEach((podcast: any) => {
      newPodcastList.push({
        id: podcast?.id?.attributes?.['im:id'],
        image: podcast?.['im:image']?.[(podcast?.['im:image']).length-1]?.label,
        name: podcast?.['im:name']?.label,
        artist: podcast?.['im:artist']?.label,
        summary: podcast?.summary?.label,
      })
    });
    console.log('assemblePodcastList', newPodcastList)
    return {list: newPodcastList, timestamp: Date.now()}
  };

  const getPodcastList = () => {
    setPodcastList(assemblePodcastList(PodcastListMock));
    console.log('getPodcastList')
  };

  const getEpisodeList = () => {
    console.log('getEpisodeList')
    // setEpisodeList({})
  };

  useEffect(() => {
    if ((podcastList?.timestamp || 0) < yesterday) {
      getPodcastList();
    }
    if (params?.podcastid && episodeList?.[params?.podcastid]?.timestamp || 0 < yesterday) {
      getEpisodeList();
    }

    console.log('useParams', params)
  }, []);

  const view = () => {
    if (params?.episodeid !== undefined) {
        // episode with lateral podcast card
        return <EpisodeDetails />;
    } else if (params?.podcastid !== undefined) {
        // episode list with lateral podcast card
        return <PodcastDetails podcastId={params.podcastid} />; 
    }
    // list of podcast cards
    return <PodcastList />;
  }

  return (
    <div className="home">
        <h1>Podcaster</h1>
        {view()}
    </div>
  );
};

export default Home;
