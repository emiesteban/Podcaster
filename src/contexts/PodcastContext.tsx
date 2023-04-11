// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { createContext, useState, type ReactNode } from 'react';
import { type PodcastContextProps } from '../types/index';

export const PodcastContext = createContext<PodcastContextProps>({
  podcastList: { timestamp: 0, list: [] },
  setPodcastList: () => {},
  episodeList: {},
  setEpisodeList: () => {},
  search: '',
  setSearch: () => {},
  loadingPodcasts: false,
  setLoadingPodcasts: () => {},
  loadingEpisodes: false,
  setLoadingEpisodes: () => {},
});

interface PodcastProviderProps {
  children: ReactNode;
}

export default function PodcastProvider({
  children,
}: PodcastProviderProps): JSX.Element {
  const [podcastList, setPodcastList] = useState<any>({
    timestamp: 0,
    list: [],
  });
  const [episodeList, setEpisodeList] = useState<any>({});
  const [search, setSearch] = useState<any>('');
  const [loadingPodcasts, setLoadingPodcasts] = useState<any>(false);
  const [loadingEpisodes, setLoadingEpisodes] = useState<any>(false);

  const contextValue: PodcastContextProps = {
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

  return (
    <PodcastContext.Provider value={contextValue}>
      {children}
    </PodcastContext.Provider>
  );
}
