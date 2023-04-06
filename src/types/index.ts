export interface EpisodeProps {
  trackId: number
  trackName: string
  releaseDate: string
  trackTimeMillis: number
  previewUrl: string
  description: string
}
export interface PodcastProps {
  id: string
  image: string
  name: string
  artist: string
  summary: string
}

export interface PodcastContextProps {
  podcastList: { timestamp: number; list: PodcastProps[] }
  setPodcastList: React.Dispatch<React.SetStateAction<{}>>
  episodeList: Record<
    string,
    { timestamp: number; resultsCount: number; list: EpisodeProps[] }
  >
  setEpisodeList: React.Dispatch<React.SetStateAction<{}>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<{}>>
  loadingPodcasts: boolean
  setLoadingPodcasts: React.Dispatch<React.SetStateAction<{}>>
  loadingEpisodes: boolean
  setLoadingEpisodes: React.Dispatch<React.SetStateAction<{}>>
}
