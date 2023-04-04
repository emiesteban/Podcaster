import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import { yesterday } from '../../../helpers/datetime';
import { getEpisodeList } from '../../../services/apiRequests';
import PodcastCard from '../../molecules/podcastCard/PodcastCard';
import './EpisodeDetail.css';

const EpisodeDetail = (({ podcastId, episodeId }: {podcastId:string, episodeId:string}) => {

    const {
        podcastList,
        episodeList,
        setEpisodeList,
        setLoadingEpisodes
    } = usePodcastContext();

    const filtered = podcastList?.list.filter((elem) => elem.id === podcastId) || []
    const filteredEpisode = episodeList?.[podcastId]?.list.filter((elem) => elem.trackId === parseInt(episodeId)) || []
   
    React.useEffect(() => {
        if (podcastId && (episodeList?.[podcastId]?.timestamp || 0) < yesterday) {
          getEpisodeList({podcastId, episodeList, setEpisodeList, setLoadingEpisodes});
        }
    }, [podcastId]);

    const createMarkup = () => {
        return {__html: filteredEpisode[0]?.description};
    }

    return <>
        {filtered && filtered.length == 1 && 
                <div className="wrapper">
                    <PodcastCard podcast={filtered[0]} showSummary={true}/>
                    <div className="tableContainer">
                        {filteredEpisode[0] && <div>
                                <h2>{filteredEpisode[0]?.trackName}</h2>
                                <p>{filteredEpisode[0]?.description}</p>
                                <div dangerouslySetInnerHTML={createMarkup()} />
                                <h3>Preview:</h3>
                                <audio data-testid="audio" controls src={filteredEpisode[0].previewUrl} />
                                {!filteredEpisode[0].previewUrl && <h4>Preview not Available</h4>}
                            </div>
                        }
                        {!filteredEpisode[0] &&
                            <h4>EPISODE NOT AVAILABLE</h4>
                        }
                    </div>
                </div>
            }
            {(!filtered || filtered.length !== 1) && <h1>Invalid Podcast</h1>}
    </>
});

export default EpisodeDetail;
