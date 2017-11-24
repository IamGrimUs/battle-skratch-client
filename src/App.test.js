import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

it('renders without crashing', () => {
  const div = document.createElement('root');
  ReactDOM.render(<App />, root);
});
