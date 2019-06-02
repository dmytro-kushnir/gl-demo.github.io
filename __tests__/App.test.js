import React from 'react';
import ReactDOM from 'react-dom';
import AppTemplate from '../src/js/components/AppTemplate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
