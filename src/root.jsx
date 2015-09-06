
import * as React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import * as ReduxThunk from 'redux-thunk';
import App from './containers/App';
import todoApp from './reducers';

const finalCreateStore = compose(
	applyMiddleware(ReduxThunk),
	devTools(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

let store = finalCreateStore(todoApp);

React.render(
	<div>
		<Provider store={store}>
			{() => <App />}
		</Provider>
		<DebugPanel top right bottom>
			<DevTools store={store} monitor={LogMonitor} />
		</DebugPanel>
	</div>
	,
	document.getElementById('root')
);
