import React, { Component } from 'react';

class SearchBar extends Component {
    state = {};

    render() {
        const { handelSearch } = this.props;
        return (
            <nav className="navbar navbar-light bg-light" style={{ marginTop: '20px' }}>
                <input
                    className="form-control mr-sm-2"
                    style={{ width: '50%' }} placeholder="Search"
                    onChange={(e) => handelSearch(e.currentTarget.value)}
                />
            </nav>
        );
    }
}

export default SearchBar;