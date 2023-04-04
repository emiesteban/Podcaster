import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import { PodcastProps } from '../../../types/index';
import Input from '../../atoms/input/Input';
import PodcastCard from '../../molecules/podcastCard/PodcastCard';
import './PodcastList.css';


const PodcastList = (() => {
    const {
        podcastList,
        search,
        setSearch,
    } = usePodcastContext();

    const filteredList = podcastList?.list.filter((elem) => elem.name?.toUpperCase().includes(search?.toUpperCase()) || elem.artist?.toUpperCase().includes(search?.toUpperCase())) || []

    return <> 
        <Input
            value={search}
            placeholder='Filter podcasts...'
            onChange={(value) => setSearch(value)}
        />
        <div className="wrapper">
            {(!filteredList || filteredList.length === 0) && <h1> No results</h1>}
            {filteredList && filteredList.map((elem:PodcastProps) => <div key={elem.id} data-testid="podcast-card"><PodcastCard podcast={elem} showSummary={false} /></div>
            )}
        </div>
    </>
});

export default PodcastList;
