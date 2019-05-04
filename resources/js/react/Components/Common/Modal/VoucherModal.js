import React, {Component} from 'react'
import Vouchers from '../../../api/Vouchers'
import {omit} from '../../../Helpers'
import {Dialog} from 'primereact/dialog'
import {Dropdown} from 'primereact/dropdown'
import {InputText} from 'primereact/inputtext'
import {Messages} from 'primereact/messages';
import Form, {Select, Input, Button, withFormApi} from 'cd-react-forms/dist/Prime'
import PhoneInput from 'cd-react-forms/dist/PhoneInput'

export default class VoucherModal extends Component {

	state = {
		errorMsg : null,
		successMsg: null
	}

	getApi = (formApi) => {
		this.formApi = formApi
	}


	handleSubmit = async (values) => {
		const {onClose} = this.props
		this.messages.clear();

		this.setState({errorMsg: null, successMsg: null})
		try{
			 const status = await Vouchers.post(values)
			 this.formApi.reset()
			 this.props.addVoucher(status.data.id)
			 this.messages.show({severity: 'success', summary: status.message, sticky: true});

		}catch(err){
			this.messages.show({severity: 'error', summary: err.message, sticky: true});
			console.error(err)
			this.setState({errorMsg: 'Sorry - saveing failed, try again later'})
		}

	}

	render(){

		const durationOptions = [
			{ key: '1d', label: '1 Day', value: 24 },
			{ key: '7d', label: '7 Days', value: 168 },
			{ key: '30d', label: '30 Days', value: 720 },
		]


		const footer = (
			<div>
				<Button label="Save" icon="pi pi-check" onClick={() => this.formApi.submitForm()} />
				<Button className="p-button-secondary" label="Cancel" icon="pi pi-times" onClick={() => this.props.onClose(false)} />
			</div>
		)
		return(
			<React.Fragment>
				<Dialog footer={footer} header="Create Voucher" width="350px" visible={this.props.visible} modal={true} onHide={() => this.props.onClose(false)}>
					<Form getApi={this.getApi}  initialValues={{
						duration: 24
					}} onSubmit={this.handleSubmit}>
					<Messages ref={(el) => this.messages = el}></Messages>
						<div className="p-grid modal-form" style={{marginTop: '15px'}}>


							<div className="p-g-12 p-md-12">

									<label >Voucher Valid for</label>
									<Select field="duration" autoWidth={false} classElement="input-fluid" options={durationOptions} placeholder="Select Duration" />

							</div>


							<div className="p-g-12 p-md-12">

								<label htmlFor="float-input">Mobile No. (optional)</label>
									<PhoneInput css={['intl-tel-input input-fluid p-inputwrapper-filled','input-fluid p-inputtext']}  defaultCountry="za" preferredCountries={['za']} field="phone" className="input-fluid" keyfilter="int" id="float-input" type="text" size="30"  />

							</div>

							<div className="p-g-12 p-md-12">

								<label htmlFor="float-input2">Comment (optional)</label>
									<Input field="comment" classElement="input-fluid" keyfilter="alphanum" id="float-input2" type="text" />

							</div>
						</div>
					</Form>
				</Dialog>
		  </React.Fragment>
		)
	}
}


/*
create($code = '', $duration = 1, $max_users = 1, $up_limit = 1, $down_limit = 1, $purge_days= 365, $comment = '')*/