import React from 'react';
import ReactDOM from 'react-dom';
import './styles/foundation/base.css';
import './styles/foundation/reset.css';
import App from './layouts/App';
import * as serviceWorker from './serviceWorker';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
