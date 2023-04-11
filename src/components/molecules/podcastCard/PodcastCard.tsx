import React from 'react';
import { Link } from 'react-router-dom';
import { type PodcastProps } from '../../../types/index';
import './PodcastCard.css';

const PodcastCard = ({
  podcast,
  showSummary,
}: {
  podcast: PodcastProps;
  showSummary?: boolean;
}) => {
  return (
    <div className={showSummary ? 'card' : 'card-list'}>
      <Link to={`/podcast/${podcast.id}`}>
        <img
          src={podcast.image}
          alt="Avatar"
          className={showSummary ? 'card-avatar-detail' : 'card-avatar-grid'}
        />
        <div className={showSummary ? 'container' : 'container-list'}>
          <h4 className="artist-list">
            <b>{podcast.artist}</b>
          </h4>
          <p className="name-list">{podcast.name}</p>
        </div>
      </Link>
      <div className="container">
        {showSummary && (
          <>
            <hr />
            <p>{podcast.summary}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PodcastCard;
