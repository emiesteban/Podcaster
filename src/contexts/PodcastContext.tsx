import React from 'react';
import { PodcastContextProps } from '../types/index';


export const PodcastContext = React.createContext<PodcastContextProps>({
    podcastList: { timestamp: 0, list: []},
    setPodcastList: ()=>{},
    episodeList: {},
    setEpisodeList: ()=>{},
    search: '',
    setSearch: ()=>{},
    loadingPodcasts: false,
    setLoadingPodcasts: ()=>{},
    loadingEpisodes: false,
    setLoadingEpisodes: ()=>{},
});

export default function PodcastProvider({children}) {
    const [podcastList, setPodcastList] = React.useState({ timestamp: 0, list: []});
	const [episodeList, setEpisodeList] = React.useState({});
	const [search, setSearch] = React.useState('');
	const [loadingPodcasts, setLoadingPodcasts] = React.useState(false);
	const [loadingEpisodes, setLoadingEpisodes] = React.useState(false);

    const contextValue = {
        podcastList,
        setPodcastList,
        episodeList,
        setEpisodeList,
        search,
        setSearch,
        loadingPodcasts,
        setLoadingPodcasts,
        loadingEpisodes,
        setLoadingEpisodes,
    };

    return (<PodcastContext.Provider value={contextValue}>
			{ children }
		</PodcastContext.Provider>
	);
}
