import React from 'react';
import usePodcastContext from '../../../contexts/usePodcastContext';
import PodcastCard from '../../molecules/podcastCard/PodcastCard';

const PodcastDetails = (({ podcastId }: {podcastId:string}) => {
    const {
        podcastList,
    } = usePodcastContext();

    const filtered = podcastList?.list.filter((elem) => elem.id === podcastId) || []

    return <>
        <h1>Podcast Details</h1>
            {filtered && filtered.length == 1 && 
                <div className="wrapper">
                    <PodcastCard podcast={filtered[0]} showSummary={true}/>
                    <div className="tableContainer">
                        <table className="table">
                            <thead>
                                <tr><th colSpan={3}>Episodes: </th></tr>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Lennon</td>
                                    <td>01/01/1970</td>
                                    <td>1 min</td>
                                </tr>
                                <tr>
                                    <td>Paul McCartney</td>
                                    <td>01/01/1970</td>
                                    <td>1 min</td>
                                </tr>
                                <tr>
                                    <td>George Harrison</td>
                                    <td>01/01/1970</td>
                                    <td>1 min</td>
                                </tr>
                                <tr>
                                    <td>Ringo Starr</td>
                                    <td>01/01/1970</td>
                                    <td>1 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            {(!filtered || filtered.length !== 1) && <h1>Invalid Podcast</h1>}
    </>

});

export default PodcastDetails;
