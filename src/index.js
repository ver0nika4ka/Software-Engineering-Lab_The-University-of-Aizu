import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/foundation/reset.scss';
import App from './layouts/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
