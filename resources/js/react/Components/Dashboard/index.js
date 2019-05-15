import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Loading from '../Common/Loading'
import ReactList from 'react-list'
import {Button} from 'cd-react-forms/dist/Prime'
import classnames from 'classnames'

import {InputText} from 'primereact/inputtext'

import VoucherModal from '../Common/Modal/VoucherModal'
import moment from 'moment'

import * as fromState from '../../reducers'
import * as voucherActions from '../../actions/Vouchers'


const withInfiniateScroll = (WrappedComponent) => {
	// ...and returns another component...
	return class extends React.Component {

		fetchRequested = new Set([])
		fetchLoaded = new Set([])
		fetchDebounce = null
		fetchListDebounce = null

		state = {
			loading: true,
			filters: {}
		}

		componentDidMount() {
			this.fetchList()
		}

		componentWillUnmount(){
			if (this.fetchListDebounce) clearTimeout(this.fetchListDebounce)
			if (this.fetchDebounce) clearTimeout(this.fetchDebounce)
		}

		updateFilter = (value, key) => {
			const {filters} = this.state
			this.setState({
				filters: {...filters, [key]: value}
			})
			this.fetchList(350)
		}

		fetchList(timeout = 1) {
			if (this.fetchListDebounce) clearTimeout(this.fetchListDebounce)
			this.fetchListDebounce = setTimeout(this.doFetchList, timeout)
		}

		doFetchList = async () => {
			this.setState({
				loading: true
			})
			try {

				await this.props.fetchIds(this.state.filters)
			}catch(e){
				//no results
				console.error(e);
			}
			this.setState({
				loading: false
			})

		}

		requestDetail = (id) => {
			// If this has already been loaded, don't re-fetch.
			console.log({id})
			if (this.fetchLoaded.has(id)) return

			// Otherwise, add this to the pool and request an update.
			this.fetchRequested.add(id)
			this.updateDetail()
		}

		updateDetail() {
			if (this.fetchDebounce) clearTimeout(this.fetchDebounce)

			this.fetchDebounce = setTimeout(this.fetchDetail, 100)
		}

		fetchDetail = () => {
			const requestedIds = this.fetchRequested

			// Work out all candidate IDs, filtering out new  who we haven't loaded yet.
			const Ids = new Set([...requestedIds])
			const newIds = new Set(
				[...Ids].filter((id) => !this.fetchLoaded.has(id))
			)

			if (newIds.size < 1) return

			this.fetchLoaded = new Set([...this.fetchLoaded, ...newIds])
			this.fetchRequested = new Set([])

			console.log({newIds})

			this.props.fetchDetail([...newIds])
		}


	  render() {
		// ... and renders the wrapped component with the fresh data!
		// Notice that we pass through any additional props
		return <WrappedComponent filters={this.state.filters} updateFilter={this.updateFilter} requestDetail={this.requestDetail} loading={this.state.loading} {...this.props} />;
	  }
	};
  }

class DashBoardComponent extends Component {


	state = {
		modalOpen: false,
		added: []
	}




	handleOpen = () => this.setState({ modalOpen: true })

	handleClose = (reload = false) => {
		if(reload){

			this.setState({  loading: true })
		}
			setTimeout(() => {
				this.setState({loading: false, modalOpen: false})
			}, 100)
		}

	renderItem = (idx, key) => {

		const { vouchers, voucherIds } = this.props

		const voucher = vouchers[voucherIds[idx]]

		console.log("P", this.props, voucher, vouchers, idx)

		if (!voucher) {
			return null
		}
		this.props.requestDetail(voucher.id)

		return (<div key={key} className={classnames('p-grid list-group-item', {
			'list-group-item-success': this.state.added.indexOf(voucher.id) > -1
		})}>
		{voucher.code ? (
			<React.Fragment>
			<div className="p-col-2"><strong>{voucher.code}</strong></div>
			<div className="p-col-2">{moment(voucher.updated_at).format('DD/MM/YYYY H:MM a')}</div>
			<div className="p-col-2">{voucher.duration / 24} Day(s)</div>
			<div className="p-col-2">{voucher.mobile}</div>
			<div className="p-col-4">{voucher.comment}</div>
			</React.Fragment>
			) : <Loading className="smaller" />}
			</div>)
	}

	addVoucher = async(id) => {
		await this.props.fetchDetail([id])
		this.props.sortVoucher(id, 0);
		this.setState({
			added: [id, ...this.state.added]
		})
	}

	filterMobile = (e) => {
		const {value} = e.target

		const mobile = value ? `*${value}*` : null

		this.props.updateFilter(mobile, 'mobile')
	}

	filterCode = (e) => {
		const {value} = e.target

		const code = value ? `*${value}*` : null

		this.props.updateFilter(code, 'code')
	}

	filterNotes = (e) => {
		const {value} = e.target

		const comment = value ? `*${value}*` : null

		this.props.updateFilter(comment, 'comment')
	}

    render() {
		const {loading, voucherIds} = this.props;

		let {mobile, code, comment} = this.props.filters

		if(typeof mobile === 'string'){
			mobile = mobile.replace(/\*/g, '');
		}

		if(typeof comment === 'string'){
			comment = comment.replace(/\*/g, '');
		}

		if(typeof code === 'string'){
			code = code.replace(/\*/g, '');
		}

        return  (
			<div className="container">
			<div className="heading">
				<h2>Current Vouchers
				<Button className="float-right" label="Add Voucher" onClick={this.handleOpen}/>
				</h2>
			</div>
			<div className="filters m-2">
				<div className="p-grid">
				<div className="p-col-4 form_group">
					<InputText className="form-control" value={code} onChange={this.filterCode} placeholder="filter Code" />
				</div>
				<div className="p-col-4 form_group">
					<InputText className="form-control" value={mobile} onChange={this.filterMobile} placeholder="filter mobile" />
				</div>
				<div className="p-col-4 form_group">
					<InputText className="form-control" value={comment} onChange={this.filterNotes} placeholder="filter Notes" />
				</div>
				</div>
			</div>

			<div className="list-group">
				<div className="p-grid list-group-item list-group-item-dark">
					<div className="p-col-2">Code</div>
					<div className="p-col-2">Created</div>
					<div className="p-col-2">Duration</div>
					<div className="p-col-2">Mobile</div>
					<div className="p-col-4">Notes</div>
				</div>
				{loading  ? <Loading /> : <ReactList
				  itemRenderer={this.renderItem}
				  length={voucherIds.length}
				  type="simple"
				  useTranslate3d
				  />}
			</div>

			<VoucherModal addVoucher={this.addVoucher} visible={this.state.modalOpen} onClose={this.handleClose} />








            </div>
        );
    }
}

const DashBoard = withInfiniateScroll(
	DashBoardComponent,
  );

// Mapped props to get the loggin state from our store
const mapStateToProps = (state, ownProps) => {
	return {
		getIsLoggedIn         : fromState.getIsLoggedIn(state),
		voucherIds			  : fromState.getVoucherIds(state),
		vouchers			  : fromState.getVouchersById(state),
		vouchersError		  : fromState.getVouchersError(state)

	}
}


export default connect(mapStateToProps,{
	fetchIds: voucherActions.fetchVouchers,
	fetchDetail: voucherActions.fetchVouchersDetail,
	sortVoucher: voucherActions.setVouchersSortPosition,
	addVoucherId: voucherActions.addVouchers,
})(DashBoard)
