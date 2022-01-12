import {StateType} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { store } from "./redux/redux-store";

const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());
store.subscribe(() => {
  renderEntireTree(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
