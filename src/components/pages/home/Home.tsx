import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import usePodcastContext from '../../contexts/usePodcastContext';
import EpisodeDetails from '../../organisms/episodeDetails/EpisodeDetails';
import PodcastDetails from '../../organisms/podcastDetails/PodcastDetails';
import PodcastList from '../../organisms/podcastList/PodcastList';


const Home = () => {
  const [searchText, setSearchText] = useState('');
  const params = useParams();
  const dayInMilliseconds = 86400000;
  const yesterday = Date.now() - dayInMilliseconds;
  const {
          podcastList,
          setPodcastList,
          episodeList,
          setEpisodeList,
          search,
          setSearch,
  } = usePodcastContext();

  useEffect(() => {
    console.log('useParams', params)
  }, [params]);

  const getPodcastList = () => (
    console.log('getPodcastList')
    // setPodcastList({})
  );

  const getEpisodeList = () => (
    console.log('getEpisodeList')
    // setEpisodeList({})
  );

  useEffect(() => {
    if (podcastList?.timestamp || 0< yesterday) {
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
        return <PodcastDetails />; 
    }
    // list of podcast cards
    return <PodcastList />;
  }

  return (
    <div className="home">
        <h1>Podcaster</h1>
        <Input value={searchText} onChange={(value) => setSearchText(value)}/>
        <Button onClick={()=> console.log('Button pressed')}>
            Test
        </Button>
        {view()}
    </div>
  );
};

export default Home;
