// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../organisms/header/Header';
import PodcastDetails from '../../organisms/podcastDetails/PodcastDetails';
import './Podcast.css';

const Podcast = (): JSX.Element => {
  const { podcastid = '' } = useParams();

  return (
    <div className="podcast" data-testid="podcast">
      <Header />
      <PodcastDetails podcastId={podcastid} />
    </div>
  );
};

export default Podcast;
