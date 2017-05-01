import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TweetList from './components/TweetList';

ReactDOM.render(
	<TweetList/>,
	document.querySelector('.app')
);
