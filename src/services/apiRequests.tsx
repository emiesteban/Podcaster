export const getEpisodeList = async (podcastId: string): Promise<any[]> => {
  const episodeurl = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
  const episodeurlCORS = `https://api.allorigins.win/get?url=${encodeURIComponent(
    episodeurl
  )}`;

  try {
    const response = await fetch(episodeurl);
    const data = await response.json();
    return data;
  } catch {
    console.error('Error fetching Episode List without CORS');
  }
  try {
    const response = await fetch(episodeurlCORS);
    const data = await response.json();
    return JSON.parse(data.contents);
  } catch {
    console.error('Error fetching Episode List using CORS provider');
    return [];
  }
};

const podcasturl =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const getPodcastList = async (): Promise<any> => {
  try {
    const response = await fetch(podcasturl);
    const data = await response.json();
    return data;
  } catch {
    console.error('Error fetching Podcast List');
    return {};
  }
};
