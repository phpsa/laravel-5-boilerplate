import React from 'react'
import PropTypes from 'prop-types'
import {Dialog} from 'primereact/dialog'

export class Modal extends React.Component {

	static propTypes = {
		modal: PropTypes.bool,
		blockScroll: PropTypes.bool,
		maximizable: PropTypes.bool,
		triggerElement: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.func
		]),
		closable: PropTypes.bool,
		showHeader: PropTypes.bool
	}

	static defaultProps = {
		modal: true,
		blockScroll: true,
		maximizable: false,
		header: null,
		closable: true,
		showHeader: true,
		visible: null
	}

	state = {
		visible: false
	}

	onShow = (e) => {
		const {onShow} = this.props
		this.setState({visible:true})
		if(onShow){
			onShow(e)
		}
	}

	onHide = (e) => {
		const {onHide} = this.props
		this.setState({visible:false})
		if(onHide){
			onHide(e)
		}
	}

	render() {

		const {children, onShow, onHide, visible, triggerElement, showHeader, ...rest} = this.props

		const trigger =  triggerElement ? React.cloneElement(triggerElement, {
			onClick: this.onShow
		}) : null

		const showHeaderValue = (showHeader && this.props.header) ? true : false

		const isVisible = visible !== null ? visible : this.state.visible

		return (
			<div className="content-section implementation">
				<Dialog visible={isVisible} onHide={this.onHide} showHeader={showHeaderValue} {...rest}>
					{children}
				</Dialog>

				{trigger}

			</div>
		)
	}
}

export default Modal
