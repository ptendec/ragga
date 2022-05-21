import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from './Store'
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  </StrictMode>
);

reportWebVitals();
