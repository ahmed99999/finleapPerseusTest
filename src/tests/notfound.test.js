import React from 'react';
import reactDOM from 'react-dom';
import NotFound from '../components/notfound';

it('renders without crashing', () => {
    const h1 = document.createElement('h1');
    h1.value = 'Not Found';
    reactDOM.render(<NotFound />, h1);
})