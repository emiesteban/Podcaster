import { assembleEpisodeList, assemblePodcastList } from '../helpers/datamanagement'
import EpisodeListMock from '../mocks/EpisodeListMock'
import { getEpisodeList, getPodcastList } from './apiRequests'

jest.mock('../helpers/datamanagement', () => ({
  __esModule: true,
  assembleEpisodeList: jest.fn(),
  assemblePodcastList: jest.fn()
}))

describe('Test getEpisodeList function', () => {
  test('should return updated episode list', async () => {
    const podcastId = '123'
    const data = EpisodeListMock
    const episodeList = {}
    const setEpisodeList = jest.fn()
    const setLoadingEpisodes = jest.fn()

    // mock fetch
    global.fetch = jest.fn(async () =>
      await Promise.resolve({
        headers: {},
        ok: true,
        redirected: false,
        status: 200,
        statusText: 'OK',
        json: async () => await Promise.resolve(data)
      } as unknown as Response)
    )

    // invoke function
    await getEpisodeList({ podcastId, episodeList, setEpisodeList, setLoadingEpisodes })

    expect(setLoadingEpisodes).toHaveBeenCalledWith(true)
    expect(global.fetch).toHaveBeenCalledWith(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)
    expect(assembleEpisodeList).toHaveBeenCalledWith(data)
    expect(setEpisodeList).toHaveBeenCalledWith({ [podcastId]: assembleEpisodeList(data) })
    expect(setLoadingEpisodes).toHaveBeenCalledWith(false)
  })
})

describe('Test getPodcastList function', () => {
  test('should return updated podcast list', async () => {
    const data = { /* mocked response from fetch */ }
    const setPodcastList = jest.fn()
    const setLoadingPodcasts = jest.fn()

    // mock fetch
    global.fetch = jest.fn(async () =>
      await Promise.resolve({
        headers: {},
        ok: true,
        redirected: false,
        status: 200,
        statusText: 'OK',
        json: async () => await Promise.resolve(data)
      } as unknown as Response)
    )

    // invoke function
    await getPodcastList({ setPodcastList, setLoadingPodcasts })

    expect(setLoadingPodcasts).toHaveBeenCalledWith(true)
    expect(global.fetch).toHaveBeenCalledWith('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    expect(assemblePodcastList).toHaveBeenCalledWith(data)
    expect(setPodcastList).toHaveBeenCalledWith(assemblePodcastList(data))
    expect(setLoadingPodcasts).toHaveBeenCalledWith(false)
  })
})
