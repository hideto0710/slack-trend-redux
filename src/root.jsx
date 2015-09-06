
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let createStore = Redux.createStore;
let Provider = ReactRedux.Provider;

let store = createStore(todoApp);

React.render(
	<Provider store={store}>
		{() => <App />}
	</Provider>,
	document.getElementById('root')
);
