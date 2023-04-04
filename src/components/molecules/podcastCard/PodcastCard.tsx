import React from 'react';
import { Link } from "react-router-dom";
import { PodcastProps } from '../../../types/index';
import './PodcastCard.css';

const PodcastCard = (({podcast, showSummary}: {podcast: PodcastProps, showSummary?:boolean}) => {
    return <div className="card">
            <Link to={`/podcast/${podcast.id}`}>
                <img src={podcast.image} alt="Avatar" style={{ width:'100%'}} /> 
                <div className="container">
                    <h4><b>{podcast.artist}</b></h4>
                    <p>{podcast.name}</p>
                </div>
            </Link>
            <div className="container">
                { showSummary && 
                <>
                    <hr />
                    <p>{podcast.summary}</p>
                </>
                }
            </div>
    </div>
});

export default PodcastCard;