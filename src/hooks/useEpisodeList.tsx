import { type PodcastEpisodeListProps } from 'src/types';
import { assembleEpisodeList } from '../helpers/datamanagement';
import { yesterday } from '../helpers/datetime';
import { getEpisodeList } from '../services/apiRequests';

const useEpisodeList = (
  podcastId: string,
  episodeList: PodcastEpisodeListProps,
  setEpisodeList: React.Dispatch<React.SetStateAction<{}>>,
  setLoadingEpisodes: React.Dispatch<React.SetStateAction<{}>>
): void => {
  if (
    podcastId &&
    (episodeList?.[podcastId]?.timestamp || yesterday - 1) < yesterday
  ) {
    setLoadingEpisodes(true);
    const cachedEpisodes = localStorage.getItem('topEpisodes');
    const parsedEpisodes = cachedEpisodes ? JSON.parse(cachedEpisodes) : [];
    if (parsedEpisodes?.[podcastId]?.timestamp || yesterday - 1 < yesterday) {
      getEpisodeList(podcastId)
        ?.then((data) => {
          const newEpisodeList = {
            ...episodeList,
            [podcastId]: assembleEpisodeList(data),
          };
          localStorage.setItem('topEpisodes', JSON.stringify(newEpisodeList));
          setEpisodeList(newEpisodeList);
        })
        .finally(() => {
          setLoadingEpisodes(false);
        });
    } else {
      setEpisodeList(parsedEpisodes);
      setLoadingEpisodes(false);
    }
  }
};

export default useEpisodeList;
