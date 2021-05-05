import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import './i18n/configs'
import { Provider } from 'react-redux'
import languageStore from './redux/store'

ReactDOM.render(
  <Provider store={languageStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
