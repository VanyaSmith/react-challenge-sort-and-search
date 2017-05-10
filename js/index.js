import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

fetch('data.json').then(function(response) {
	return response.json();
}).then(function(json) {
	ReactDOM.render(<App users={json}/>, document.getElementById('root'));
}).catch(function(ex) {
	console.log('parsing failed', ex)
});