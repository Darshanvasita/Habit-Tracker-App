import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
import { habits } from './reducers';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

//creating the store
const store = createStore(habits);

// create root element of app and render it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

