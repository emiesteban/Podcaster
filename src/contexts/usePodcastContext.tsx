import { useContext } from 'react';
import { type PodcastContextProps } from 'src/types';
import { PodcastContext } from './PodcastContext';

export default function usePodcastContext(): PodcastContextProps {
  const contextValue = useContext(PodcastContext);
  return contextValue;
}
