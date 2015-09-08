
import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as ReduxThunk from 'redux-thunk';

import App from './containers/App';
import * as Reducers from './reducers';

import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(combineReducers(Reducers));

React.render(
	<div>
		<Provider store={store}>
			{() => <App />}
		</Provider>
	</div>
	,
	document.getElementById('app')
);
