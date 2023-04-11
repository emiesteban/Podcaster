// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import Header from '../../organisms/header/Header';
import PodcastList from '../../organisms/podcastList/PodcastList';
import './Home.css';

const Home = (): JSX.Element => {
  return (
    <div className="home" data-testid="home">
      <Header />
      <PodcastList />
    </div>
  );
};

export default Home;
