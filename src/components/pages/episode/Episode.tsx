// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import EpisodeDetails from '../../organisms/episodeDetail/EpisodeDetail';
import Header from '../../organisms/header/Header';
import './Episode.css';

const Episode = (): JSX.Element => {
  const { episodeid = '', podcastid = '' } = useParams();
  return (
    <div className="episode" data-testid="episode">
      <Header />
      <EpisodeDetails podcastId={podcastid} episodeId={episodeid} />
    </div>
  );
};

export default Episode;
