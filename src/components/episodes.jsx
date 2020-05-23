import React, { Component } from 'react';
import { getCharacter } from '../services/characerService';
import { getEpisodes } from '../services/episodeService';
import Episode from './episode';
import { Link } from 'react-router-dom';

class Episodes extends Component {
    state = {
        episodes: []
    }

    async componentDidMount() {
        const characterId = this.props.match.params.id;
        const character = await getCharacter(characterId);

        const episodesIds = character["episode"]
            .map(url => url.replace("https://rickandmortyapi.com/api/episode/", ''))
            .join(',');
        let episodes = await getEpisodes(null, null, episodesIds);
        episodes = (typeof episodes !== 'undefined') ? ((!Array.isArray(episodes)) ? [episodes] : episodes) : [];
        this.setState({ episodes });
    }

    render() {
        const { episodes } = this.state;

        return (
            <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-md-1"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">episode</th>
                                <th scope="col">air-date</th>
                                <th scope="col">created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {episodes.map(episode => (
                                <Episode
                                    key={episode.id}
                                    episode={episode}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3">
                    <Link className="btn btn-primary btn-lg" to="/characters" />
                </div>
            </div>
        );
    }
}

export default Episodes;