/* index.js -> Main app file
** This file "index.js" is the main file application
** this code load dependencies, import the main component, main style file.
** Then render the main component inside of a html element
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/containers/home'
import data from './data/api.json'

// Here we should have different entry point for each page Home/-home.js|


ReactDOM.render(<Home data = {data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
