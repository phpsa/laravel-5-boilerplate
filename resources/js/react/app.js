/* global Site process*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Root from './Core/Root'

import configureStore from './config/configureStore'
import configureRenders from './config/configureRenders'

const container = document.getElementById('react-app')

const storeData = {}

const store = configureStore()

configureRenders(store)

if(container){
	const render = () => {

		if( ! container ) return

		ReactDOM.render(
			<Provider store={store}>
				<Root />
			</Provider>,
			container
		)
	}
	store.subscribe(render)
	render()
}
