import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

/**
 * A component used to display a full-screen error message.
 *
 * @usage;
 *
 *		import { ErrorMessage } from '../app'
 *
 *		...
 *		<ErrorMessage
 * 	 		code={401}
 * 	 		message="Sorry, you need to log in"
 * 	 	/>
 *		...
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @type {Component}
 */
class ErrorMessage extends Component {

	/**
	 * The properties that this component can use.
	 * @type {Object}
	 */
	static propTypes = {

		/**
		 * The main title of the error message.
		 */
		title : PropTypes.string,

		/**
		 * An optional sub-message to display.
		 * Typically used to explain an error in more detail, e.g.,
		 * next steps, what went wrong, how to resolve, or what to expect.
		 */
		message : PropTypes.string,

		/**
		 * Should be a node, or an array of nodes.
		 * This is content which might help the user
		 * resolve the error, or guide toward resolution
		 */
		children : PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]),

		/**
		 * This should be a function to run on retry click.
		 */
		onRetry: PropTypes.func,

		/** The label for retry function. Only used in conjunction with onRetry */
		retryLabel: PropTypes.node
	}

	/**
	 * Set the default values of properties.
	 * @type {Object}
	 */
	static defaultProps = {
		code  : 400,
		title : 'Sorry, an error occurred',
		retryLabel: 'Retry'
	}

	/**
	 * Render the error message.
	 *
	 * @author Sam Sehnert <sam@customd.com>
	 *
	 * @return {React}  A react DOM node.
	 */
	render () {

		const { title, message, children, onRetry, retryLabel } = this.props

		return (
			<div className="error">
				<div className="error__content">
					<h1 className="error__title">{title}</h1>
					{message && <h2 className="error__message">{message}</h2>}
					{children}
					{onRetry && <button onClick={onRetry}>{retryLabel}</button>}
				</div>
			</div>
		)
	}
}

export default ErrorMessage
