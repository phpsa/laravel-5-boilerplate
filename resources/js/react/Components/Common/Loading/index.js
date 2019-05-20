import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {ProgressSpinner} from 'primereact/progressspinner';
import './Loading.scss'

const Loading = (props) => (
	<div id="loading_spinner" className={classNames('loading_container', props.className)} ref={props.forwardedRef}>
		<div className="ls__content_res">
			<center><ProgressSpinner {...props} /></center>
		</div>
	</div>
)

Loading.propTypes = {
	className: PropTypes.string,
	forwardedRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(Element) })
	])
}

export default React.forwardRef((props, ref) => (
	<Loading {...props} forwardedRef={ref} />
))