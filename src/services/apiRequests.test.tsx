import { getEpisodeList, getPodcastList } from './apiRequests';

describe('getEpisodeList', () => {
  test('returns episode data when fetched without CORS', async () => {
    const result = await getEpisodeList('12345');
    expect(result).toBeDefined();
  });

  test('logs an error when there is an error fetching without CORS', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce('');
    console.error = jest.fn();
    await getEpisodeList('invalid-id');
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching Episode List without CORS'
    );
  });

  test('logs an error when there is an error fetching using CORS provider', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('');
    console.error = jest.fn();
    await getEpisodeList('invalid-id');
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching Episode List using CORS provider'
    );
  });
});

describe('getPodcastList', () => {
  test('returns podcast data when fetched', async () => {
    const result = await getPodcastList();
    expect(result).toBeDefined();
  });

  test('logs an error when there is an error fetching podcast data', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('');
    console.error = jest.fn();
    await getPodcastList();
    expect(console.error).toHaveBeenCalledWith('Error fetching Podcast List');
  });
});
