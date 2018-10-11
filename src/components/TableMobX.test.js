import React from 'react';
import ReactDOM from 'react-dom';
import TableMobx from './TableMobx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableMobx />, div);
  ReactDOM.unmountComponentAtNode(div);
});
