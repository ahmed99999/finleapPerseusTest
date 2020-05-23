import React from 'react';
import reactDOM from 'react-dom';
import Episode from '../components/episode';

it('renders without crashing', () => {
    const tr = document.createElement('tr');
    const values = ['name', 'episode', 'air_date', 'created'];
    const th = document.createElement('th');
    th.value = 1;
    th.scope = "row";
    tr.appendChild(th);
    values.forEach(value => {
        const td = document.createElement('td');
        td.value = value;
        tr.appendChild(td);
    });
    const episode = {
        id: 1,
        name: 'name',
        episode: 'episode',
        air_date: 'air_date',
        created: 'created',
    };
    reactDOM.render(<Episode episode={episode} />, tr);
})