import { assembleEpisodeList } from '../helpers/datamanagement';
import EpisodeListMock from '../mocks/EpisodeListMock';
import { getEpisodeList } from '../services/apiRequests';
import useEpisodeList from './useEpisodeList';

jest.mock('../helpers/datetime');
jest.mock('../services/apiRequests');

const localStorageMock = (function () {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

const data = {};
global.fetch = jest.fn(
  async () =>
    await Promise.resolve({
      headers: {},
      ok: true,
      redirected: false,
      status: 200,
      statusText: 'OK',
      json: async () => await Promise.resolve(data),
    } as unknown as Response)
);

describe('useEpisodeList', () => {
  const podcastId = 'podcastId';
  const episodeList = { [podcastId]: assembleEpisodeList(EpisodeListMock) };
  const setEpisodeList = jest.fn();
  const setLoadingEpisodes = jest.fn();

  test('should not update episode list if there is a cached version with a recent timestamp', async () => {
    // arrange
    const cachedEpisodes = JSON.stringify({
      [podcastId]: assembleEpisodeList(EpisodeListMock),
    });
    localStorage.setItem('topEpisodes', cachedEpisodes);

    // act
    useEpisodeList(podcastId, episodeList, setEpisodeList, setLoadingEpisodes);

    // assert
    expect(getEpisodeList).not.toHaveBeenCalled();
    expect(localStorage.getItem('topEpisodes')).toBe(cachedEpisodes);
  });
});
