import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../Components/Common/Loading'
import Config from '../config'
import ErrorLayout from './ErrorLayout'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as fromState from '../reducers'
import {fetchSession} from '../actions/Session'
import PropTypes from 'prop-types'

import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/nova-light/theme.css'
import '../Styles/app.scss'


class BaseLayout extends React.Component {

	static propTypes = {
		requiredAuth: PropTypes.bool
	}

	state = {
		_hasError: false,
		_hasLoaded: false
	}

	componentDidMount(){
		const {getIsLoggedIn, fetchSession, isLoading } = this.props
		if(!isLoading){
			if(!getIsLoggedIn){
				return fetchSession().then(() => {
					return this.setState({ _hasLoaded: true })
				})
			}else{
				return this.setState({ _hasLoaded: true })
			}
			//
		}

	}

	componentDidCatch(e) {
		this.setState({ _hasError: e })
		console.warn('-------------- HOOOOOOO --------------')
		console.error(e)
	}



	render() {
		const {
			component: Component,
			requiredAuth,
			getIsLoggedIn,
			isLoading,
			...rest
		} = this.props

		const {_hasError, _hasLoaded } = this.state

		console.log(this.props)


		if(!isLoading && _hasLoaded && requiredAuth){
			//If not logged in -lets redirect straight to the login page!!!!
			if(!getIsLoggedIn){
				window.location.href = '/login'
			}


		}

		return _hasLoaded ? (
			<Route
				{...rest}
				render={(matchProps) => (
					<React.Fragment>


						{_hasError ? (
							<ErrorLayout />
						) : (
							<React.Fragment>

								<Component {...matchProps} />
							</React.Fragment>
						)}
					</React.Fragment>
				)}
			/>
		) : <div />
	}
}


// Mapped props to get the loggin state from our store
const mapStateToProps = (state, ownProps) => {
	return {
		getIsLoggedIn         : fromState.getIsLoggedIn(state)
	}
}

const BaseLayoutConnected = connect(mapStateToProps,{fetchSession})(BaseLayout)

export default BaseLayoutConnected

export const BaseLoading = (props) => (
	<BaseLayoutConnected component={() => (
		<Loading className="base_layout_loader" />
	)} {...props} />
)
