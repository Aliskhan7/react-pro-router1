import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

ReactDOM.render(
    <div className='container'>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>,
  document.getElementById('root')
);
