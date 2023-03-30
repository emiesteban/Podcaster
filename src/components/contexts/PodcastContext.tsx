import React from 'react';

interface PodcastContextProps {
    podcastList: {timestamp: number, list: any[]};
    setPodcastList: React.Dispatch<React.SetStateAction<{}>>;
    episodeList: {[key:string]: {timestamp: number, episode: {}}};
    setEpisodeList: React.Dispatch<React.SetStateAction<{}>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<{}>>;
}

export const PodcastContext = React.createContext<PodcastContextProps>({
    podcastList: { timestamp: 0, list: []},
    setPodcastList: ()=>{},
    episodeList: {},
    setEpisodeList: ()=>{},
    search: '',
    setSearch: ()=>{},
});

export default function PodcastProvider({children}) {
    const [podcastList, setPodcastList] = React.useState({ timestamp: 0, list: []});
	const [episodeList, setEpisodeList] = React.useState({});
	const [search, setSearch] = React.useState('');

    const contextValue = {
        podcastList,
        setPodcastList,
        episodeList,
        setEpisodeList,
        search,
        setSearch,
    };

    return (<PodcastContext.Provider value={contextValue}>
			{ children }
		</PodcastContext.Provider>
	);
}
