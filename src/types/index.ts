export interface PodcastProps {
    id: string;
    image: string;
    name: string;
    artist: string;
    summary: string;
};

export interface PodcastDetailsProps {

};

export interface PodcastContextProps {
    podcastList: {timestamp: number, list: PodcastProps[]};
    setPodcastList: React.Dispatch<React.SetStateAction<{}>>;
    episodeList: {[key:string]: {timestamp: number, episode: {}}};
    setEpisodeList: React.Dispatch<React.SetStateAction<{}>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<{}>>;
}