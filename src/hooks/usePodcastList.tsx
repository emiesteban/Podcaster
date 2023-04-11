import { assemblePodcastList } from '../helpers/datamanagement';
import { yesterday } from '../helpers/datetime';
import { getPodcastList } from '../services/apiRequests';
import { type PodcastListProps } from '../types';

const usePodcastList = (
  podcastList: PodcastListProps,
  setPodcastList: React.Dispatch<React.SetStateAction<{}>>,
  setLoadingPodcasts: React.Dispatch<React.SetStateAction<{}>>
) => {
  if ((podcastList?.timestamp || yesterday - 1) < yesterday) {
    setLoadingPodcasts(true);
    const cachedPodcasts = localStorage.getItem('topPodcasts');
    const parsedPodcasts = cachedPodcasts
      ? JSON.parse(cachedPodcasts)
      : { list: {}, timestamp: yesterday - 1 };
    if (parsedPodcasts.timestamp || yesterday - 1 < yesterday) {
      let newList;
      getPodcastList()
        .then((data) => {
          newList = assemblePodcastList(data);
          localStorage.setItem('topPodcasts', JSON.stringify(newList));
          setPodcastList(newList);
        })
        .finally(() => {
          setLoadingPodcasts(false);
        });
    } else {
      setPodcastList(parsedPodcasts);
      setLoadingPodcasts(false);
    }
  }
};

export default usePodcastList;
