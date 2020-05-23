import React from 'react';
import reactDOM from 'react-dom';
import Character from '../components/character';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    div.className = "card";
    div.style.width = "18rem";
    div.style.margin = "13px";
    const image = document.createElement('image');
    image.className = "card-img-top";
    image.src = "https://url";
    image.alt = "Card image cap";
    const subDiv = document.createElement('div');
    subDiv.className = "card-body";
    const h5 = document.createElement('h5');
    h5.className = "card-title";
    h5.value = "ahmed";
    const h51 = document.createElement('h5');
    h51.className = "card-title";
    h51.value = "human";
    const p = document.createElement('p');
    p.className = "card-text";
    p.value = "human";
    const a = document.createElement('a');
    a.href = "characters/1/episodes";
    a.className = "btn btn-primary";
    a.value = "See Episodes";
    subDiv.appendChild(h5);
    subDiv.appendChild(h51);
    subDiv.appendChild(p);
    subDiv.appendChild(a);
    div.appendChild(image);
    div.appendChild(subDiv);
    const character = {
        id: 1,
        name: 'ahmed',
        species: 'human',
        type: 'human',
        image: 'http://url'
    };
    reactDOM.render(
        <BrowserRouter>
            <Character character={character} />
        </BrowserRouter>, div);
})