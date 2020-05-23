import React, { Component } from 'react';
import { getCharacters } from '../services/characerService';
import SearchBar from './searchBar';
import Character from './character';
import Label from './common/label';
import Pagination from './common/pagination';

class Characters extends Component {

    state = {
        info: {
            pages: 1
        },
        characters: [],
        recommendedCharacters: [],
        currentPage: 1,
        addfilter: false
    };

    async componentDidMount() {
        const data = await getCharacters();
        const characters = data['results'];
        const info = data['info'];

        this.setState({
            info: info,
            characters: characters
        });
    }

    handlePage = async (pageNumber) => {
        const data = await getCharacters(pageNumber);
        const characters = data['results'];

        this.setState({
            characters,
            currentPage: pageNumber
        });
    };

    handelSearch = async (name) => {
        const data = await getCharacters(null, name);
        const characters = data['results'];
        const addfilter = (name.length !== 0);
        let { recommendedCharacters } = this.state;
        if (
            recommendedCharacters.length == 0 &&
            characters.length > 0 &&
            name.length >= 4
        ) {
            const species = characters[0].species;
            const data = await getCharacters(null, null, species);
            recommendedCharacters = data['results'].slice(0, 4);
        }
        this.setState({ characters, recommendedCharacters, addfilter });
    };

    render() {
        const { characters, currentPage, info, recommendedCharacters, addfilter } = this.state;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                        <SearchBar
                            handelSearch={this.handelSearch}
                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className='row'>
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                        {(recommendedCharacters.length > 0) &&
                            <div>
                                <Label label="Recommended Characters" />
                                <div className="row">
                                    {recommendedCharacters.map(character => (
                                        <Character key={character.id} character={character} />
                                    ))}
                                </div>
                            </div>
                        }
                        <Label label="Characters" />
                        <div className="row">
                            {characters.map(character => (
                                <Character key={character.id} character={character} />
                            ))}
                        </div>
                        <div>
                            {!addfilter &&
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={info.pages}
                                    handlePage={(pageNumber) => this.handlePage(pageNumber)}
                                />}
                        </div>
                    </div>
                    <div className="col-md-3">
                        {!addfilter &&
                            <Pagination
                                currentPage={currentPage}
                                totalPages={info.pages}
                                handlePage={(pageNumber) => this.handlePage(pageNumber)}
                            />}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Characters;