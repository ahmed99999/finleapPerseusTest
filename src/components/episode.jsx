import React, { Component } from 'react';

class Episode extends Component {
    render() {
        const { episode } = this.props;
        return (
            <tr>
                <th scope="row">{episode.id}</th>
                <td>{episode.name}</td>
                <td>{episode.episode}</td>
                <td>{episode.air_date}</td>
                <td>{episode.created}</td>
            </tr>
        );
    }
}

export default Episode;