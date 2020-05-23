import React from 'react';
import reactDOM from 'react-dom';
import SearchBar from '../components/searchBar';

it('renders without crashing', () => {
    const nav = document.createElement('nav');
    nav.className = "navbar navbar-light bg-light";
    nav.style.marginTop = '20px';
    const input = document.createElement('input');
    input.className = "form-control mr-sm-2";
    input.style.width = "50%";
    input.placeholder = "Search";
    nav.appendChild(input);
    reactDOM.render(<SearchBar />, nav);
})