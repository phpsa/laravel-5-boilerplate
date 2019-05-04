import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const enhancer = [thunk];

export default function configureStore(initialState) {
	// Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
	// See https://github.com/reactjs/redux/releases/tag/v3.1.0
	const store = createStore(rootReducer, initialState, applyMiddleware(...enhancer));

	return store;
}
