// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
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
}): JSX.Element => {
  return (
    <div className={showSummary ?? false ? 'card' : 'card-list'}>
      <Link to={`/podcast/${podcast.id}`}>
        <img
          src={podcast.image}
          alt="Avatar"
          className={
            showSummary ?? false ? 'card-avatar-detail' : 'card-avatar-grid'
          }
        />
        <div className={showSummary ?? false ? 'container' : 'container-list'}>
          <h4 className="artist-list">
            <b>{podcast.artist}</b>
          </h4>
          <p className="name-list">{podcast.name}</p>
        </div>
      </Link>
      {(showSummary ?? false) && (
        <div className="summary">
          <hr />
          <p>{podcast.summary}</p>
        </div>
      )}
    </div>
  );
};

export default PodcastCard;
