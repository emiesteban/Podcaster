// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import usePodcastContext from '../../../contexts/usePodcastContext';
import './Header.css';

const Header = (): JSX.Element => {
  const { loadingEpisodes, loadingPodcasts } = usePodcastContext();

  return (
    <>
      <div className="header">
        <h1 className="header-text">
          <Link to={'/'}>Podcaster</Link>
        </h1>
        {(loadingEpisodes || loadingPodcasts) && (
          <div className="loader" data-testid="loader">
            <ClipLoader size={20} color={'#123abc'} />
          </div>
        )}
      </div>
      <div className="divider" />
    </>
  );
};

export default Header;
