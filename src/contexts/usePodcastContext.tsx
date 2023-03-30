import { useContext } from 'react';
import { PodcastContext } from './PodcastContext';

export default function usePodcastContext() {
	const contextValue = useContext(PodcastContext);
	return contextValue;
}
