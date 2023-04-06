import { assembleEpisodeList, assemblePodcastList } from '../helpers/datamanagement'

export const getEpisodeList = async (
  { podcastId, episodeList, setEpisodeList, setLoadingEpisodes }:
  { podcastId: string, episodeList: {}, setEpisodeList: React.Dispatch<React.SetStateAction<{}>>, setLoadingEpisodes: React.Dispatch<React.SetStateAction<{}>> }
) => {
    setLoadingEpisodes(true);
  const episodeurl = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
  // const episodeurl= `https://api.allorigins.win/get?url=${encodeURIComponent(episodeurlbase)}`
    const response = await fetch(episodeurl);
  const data = await response.json();
  const newEpisodeList = {
    ...episodeList,
    [podcastId]: assembleEpisodeList(data)
    };
    setEpisodeList(newEpisodeList)
  setLoadingEpisodes(false);
}

const podcasturl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const getPodcastList = async (
    { setPodcastList, setLoadingPodcasts }:
  { setPodcastList: React.Dispatch<React.SetStateAction<{}>>, setLoadingPodcasts: React.Dispatch<React.SetStateAction<{}>> }
) => {
  setLoadingPodcasts(true);
    const response = await fetch(podcasturl);
    const data = await response.json();
    setPodcastList(assemblePodcastList(data));
    setLoadingPodcasts(false);
}
