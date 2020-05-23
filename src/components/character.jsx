import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Character extends Component {

    render() {
        var { character } = this.props;
        const style = {
            width: '18rem',
            margin: '13px'
        };

        const episodesLink = `characters/${character.id}/episodes`;
        return (
            <div className="card" style={style}>
                <img className="card-img-top" src={character.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <h5 className="card-title">{character.species}</h5>
                    <p className="card-text">{character.type}</p>
                    <Link to={episodesLink} className="btn btn-primary">See Episodes</Link>
                </div>
            </div>
        );
    }
}

export default Character;