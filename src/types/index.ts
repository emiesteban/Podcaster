export interface EpisodeProps {
  trackId: number;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  previewUrl: string;
  description: string;
}
export interface PodcastProps {
  id: string;
  image: string;
  name: string;
  artist: string;
  summary: string;
}

export interface PodcastListProps {
  timestamp: number;
  list: PodcastProps[];
}

export interface EpisodeListProps {
  timestamp: number;
  list: EpisodeProps[];
  resultsCount: number;
}

export type PodcastEpisodeListProps = Record<string, EpisodeListProps>;

export interface PodcastContextProps {
  podcastList: PodcastListProps;
  setPodcastList: React.Dispatch<React.SetStateAction<{}>>;
  episodeList: PodcastEpisodeListProps;
  setEpisodeList: React.Dispatch<React.SetStateAction<{}>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<{}>>;
  loadingPodcasts: boolean;
  setLoadingPodcasts: React.Dispatch<React.SetStateAction<{}>>;
  loadingEpisodes: boolean;
  setLoadingEpisodes: React.Dispatch<React.SetStateAction<{}>>;
}
