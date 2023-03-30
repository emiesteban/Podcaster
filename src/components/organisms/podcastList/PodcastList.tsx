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

    const filteredList = podcastList?.list.filter((elem) => elem.name.toUpperCase().includes(search.toUpperCase()) || elem.artist.toUpperCase().includes(search.toUpperCase())) || []

    React.useEffect(() => {
        console.log('search', search)
      }, [search]);
    
    return <> 
        <Input value={search} onChange={(value) => setSearch(value)}/>
        <div className="wrapper">
            {(!filteredList || filteredList.length === 0) && <h1> No results</h1>}
            {filteredList && filteredList.map((elem:PodcastProps) => <PodcastCard key={elem.id} podcast={elem} showSummary={false}/>)}
        </div>
    </>
});

export default PodcastList;
