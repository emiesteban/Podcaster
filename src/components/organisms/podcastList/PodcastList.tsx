import React, { useEffect } from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import usePodcastList from '../../../hooks/usePodcastList';
import { type PodcastProps } from '../../../types/index';
import Input from '../../atoms/input/Input';
import PodcastCard from '../../molecules/podcastCard/PodcastCard';
import './PodcastList.css';

const PodcastList = () => {
  const { podcastList, search, setSearch, setPodcastList, setLoadingPodcasts } =
    usePodcastContext();

  useEffect(() => {
    usePodcastList(podcastList, setPodcastList, setLoadingPodcasts);
  }, []);

  const filteredList =
    podcastList?.list.filter(
      (elem) =>
        elem.name?.toUpperCase().includes(search?.toUpperCase()) ||
        elem.artist?.toUpperCase().includes(search?.toUpperCase())
    ) || [];

  return (
    <>
      <div className="search">
        <div className="counter">{filteredList.length}</div>
        <Input
          value={search}
          placeholder="Filter podcasts..."
          onChange={(value) => {
            setSearch(value);
          }}
        />
      </div>
      <div className="wrapper">
        {(!filteredList || filteredList.length === 0) && <h1> No results</h1>}
        {filteredList &&
          filteredList.map((elem: PodcastProps) => (
            <div key={elem.id} data-testid="podcast-card">
              <PodcastCard podcast={elem} showSummary={false} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PodcastList;
