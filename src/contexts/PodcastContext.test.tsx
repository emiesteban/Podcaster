import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import PodcastProvider, { PodcastContext } from './PodcastContext';

describe('PodcastProvider', () => {
  test('should render children', () => {
    const { getByTestId } = render(
      <PodcastProvider>
        <div data-testid="test-child" />
      </PodcastProvider>
    );

    expect(getByTestId('test-child')).toBeInTheDocument();
  });

  test('should update the podcastList when setPodcastList is called', () => {
    const { getByText } = render(
      <PodcastProvider>
        <PodcastContext.Consumer>
          {({
            podcastList,
            setPodcastList,
          }: {
            podcastList: any;
            setPodcastList: any;
          }) => (
            <>
              <h1 data-testid="artist">{podcastList?.list[0]?.artist}</h1>
              <button
                onClick={() => {
                  setPodcastList({
                    timestamp: 1,
                    list: [{ id: 1, artist: 'Test Podcast' }],
                  });
                }}
              >
                Update Podcast List
              </button>
            </>
          )}
        </PodcastContext.Consumer>
      </PodcastProvider>
    );

    fireEvent.click(getByText('Update Podcast List'));
    waitFor(() => {
      expect(getByText('Test Podcast')).toBeInTheDocument();
    });
  });
});
