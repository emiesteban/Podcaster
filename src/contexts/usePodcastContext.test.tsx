import { renderHook } from '@testing-library/react'
import React from 'react'
import { PodcastContext } from './PodcastContext'
import usePodcastContext from './usePodcastContext'

describe('usePodcastContext', () => {
  it('should return the context value', () => {
    const expected = {
      podcastList: { timestamp: 0, list: [] },
      setPodcastList: () => {},
      episodeList: {},
      setEpisodeList: () => {},
      search: '',
      setSearch: () => {},
      loadingPodcasts: false,
      setLoadingPodcasts: () => {},
      loadingEpisodes: false,
      setLoadingEpisodes: () => {}
    }

    const wrapper = ({ children }: React.PropsWithChildren<{}>): JSX.Element => (
      <PodcastContext.Provider value={expected}>
        {children}
      </PodcastContext.Provider>
    )

    const { result } = renderHook(() => usePodcastContext(), { wrapper })

    expect(result.current).toBe(expected)
  })
})
