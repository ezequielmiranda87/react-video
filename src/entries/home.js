/* Home.js -> Intry for Home page
** ==============================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Playlist from './playlist/components/playlist';
import data from './data/api.json'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Playlist data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
