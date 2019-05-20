import React from 'react'
import classnames from 'classnames'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const _MyAlert = withReactContent(Swal)
const MyAlert = {
	fire: function(props) {

		const callObject = React.isValidElement(props) ? {
			html: props
		} : props


		const {confirmButtonText, cancelButtonText, confirmButtonClass, cancelButtonClass, ...rest} = callObject

		const confirmClass = classnames('left p-button p-component p-button-rounded p-button-text-only', {
			'p-button-primary' : !confirmButtonClass,
			[confirmButtonClass] : confirmButtonClass
		})
		const cancelClass = classnames('right p-button p-component p-button-rounded p-button-text-only', {
			'p-button-secondary' : !cancelButtonClass,
			[cancelButtonClass] : cancelButtonClass
		})


		const confirmText = confirmButtonText || 'Ok'
		const cancelText = cancelButtonText || 'Cancel'

		callObject.buttonsStyling = false

		callObject.confirmButtonClass = confirmClass
		callObject.cancelButtonClass = cancelClass

		callObject.confirmButtonText = <span className="p-button-text p-c">{confirmText}</span>
		callObject.cancelButtonText = <span className="p-button-text p-c">{cancelText}</span>


		return _MyAlert.fire(callObject)

	}
}



export default MyAlert

export const ConfirmModal = (props = {}) => {

	const {confirmButtonText, cancelButtonText, confirmButtonClass, cancelButtonClass, ...rest} = props

	const confirmClass = classnames('left p-button p-component p-button-rounded p-button-text-only', {
		'p-button-danger' : !confirmButtonClass,
		[confirmButtonClass] : confirmButtonClass
	})
	const cancelClass = classnames('right p-button p-component p-button-rounded p-button-text-only', {
		'p-button-secondary' : !cancelButtonClass,
		[cancelButtonClass] : cancelButtonClass
	})



	return MyAlert.fire({
		title: <p>Are you sure?</p>,
		type: 'warning',
		allowEnterKey: false,
		showCancelButton: true,
		buttonsStyling: false,
		confirmButtonText: confirmButtonText || 'Yes, delete it!',
		cancelButtonText: cancelButtonText || 'No, cancel',
		confirmButtonClass: confirmClass,
		cancelButtonClass: cancelClass,
		...rest
	})
}
