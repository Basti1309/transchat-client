import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { api } from './middlewares/api';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(api),
    window.__REDUX_DEVTOOLS_EXTENSION__
              && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
          );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
