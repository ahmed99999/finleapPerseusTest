import React from 'react';
import reactDOM from 'react-dom';
import Label from '../components/common/label';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.value = 'character';
    const hr = document.createElement('hr');
    div.appendChild(h3);
    div.appendChild(hr);
    reactDOM.render(<Label label="character" />, div);
})