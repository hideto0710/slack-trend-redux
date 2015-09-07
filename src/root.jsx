
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as ReduxThunk from 'redux-thunk';

import App from './containers/App';

import todoApp from './reducers';

import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(todoApp);

React.render(
	<div>
		<Provider store={store}>
			{() => <App />}
		</Provider>
	</div>
	,
	document.getElementById('app')
);
