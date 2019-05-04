import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Routes from './Routes'
class RoutesHandler extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route
					render={({ location }) => (
						<Switch location={location}>
							{Routes.map(({exact=true, ...props}, idx) => {
								if( props.from && props.to) {
									return <Redirect key={idx} exact={exact} {...props} />
								}
								return <Route key={idx} exact={exact} {...props} />
							})}

						</Switch>

					)}
				/>
			</BrowserRouter>
		)
	}
}

export default hot(module)(RoutesHandler)
