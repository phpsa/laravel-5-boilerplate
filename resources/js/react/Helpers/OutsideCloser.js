import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Stores a list of presently mounted components.
 * @type {Array}
 */
const mountedComponents = []

/**
 * Delegates events to each mounted component.
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {Event}  event       The click event to trigger this handler.
 * @return {void}
 */
const globalHandleClickOutside = (event) => {

	mountedComponents.map((component) => component.handleClickOutside(event))
}

/**
 * Trigger an outside click on the document as a way of closing open modals.
 *
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @return {void}
 */
export const outsideClick = () => {
	var clickEvent = document.createEvent('MouseEvents')
	clickEvent.initEvent('mousedown', true, true)
	document.body.dispatchEvent(clickEvent)
}

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideCloser extends Component {

	static propTypes = {
		children: PropTypes.oneOfType( [PropTypes.node.isRequired, PropTypes.element.isRequired, PropTypes.string.isRequired ]),
		onClose: PropTypes.func.isRequired
	}

	componentDidMount() {

		if( mountedComponents.length === 0 )
		{
			document.addEventListener('touchstart', globalHandleClickOutside)
			document.addEventListener('mousedown', globalHandleClickOutside)
		}

		mountedComponents.push(this)
	}

	componentWillUnmount() {

		const idx = mountedComponents.indexOf(this)

		if ( idx > -1 ) {
			mountedComponents.splice(idx, 1)
		}

		if( mountedComponents.length === 0 )
		{
			document.removeEventListener('touchstart', globalHandleClickOutside)
			document.removeEventListener('mousedown', globalHandleClickOutside)
		}
	}

	/**
     * Set the wrapper ref
	 * @param {node} node to set wrapper reference to
	 * @return {void}
    */
	setWrapperRef = (node) => {
		this.wrapperRef = node
	}

	/**
     * Alert if clicked on outside of element
	 * @param {element} event The event that triggered this handler.
	 * @return {void}
    */
	handleClickOutside(event) {

		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.props.onClose(event)
		}
	}

	/**
	 * Render our element
	 * @return {void}
	 */
	render() {
		const {onClose, children, ...rest} = this.props

		return <div ref={this.setWrapperRef} {...rest}>{this.props.children}</div>
	}
}
