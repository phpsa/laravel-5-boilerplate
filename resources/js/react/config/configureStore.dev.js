/*eslint-env node*/
import { createStore, applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = [
	// require('redux-immutable-state-invariant').default(),
	thunk
]

export default function configureStore(initialState) {
	// Note: only Redux >= 3.1.0 supports passing enhancer as third argument. See
	// https://github.com/reactjs/redux/releases/tag/v3.1.0
	const store = createStore(rootReducer, initialState, composeEnhancers(
		applyMiddleware(...enhancer)
	))

	// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

	return store
}
