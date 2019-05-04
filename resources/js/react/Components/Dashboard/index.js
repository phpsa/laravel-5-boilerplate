import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Loading from '../Common/Loading'
import ReactList from 'react-list'
import {Button} from 'cd-react-forms/dist/Prime'

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
			loading: true
		}

		componentDidMount() {
			this.fetchList()
		}

		componentWillUnmount(){
			if (this.fetchListDebounce) clearTimeout(this.fetchListDebounce)
			if (this.fetchDebounce) clearTimeout(this.fetchDebounce)
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

				await this.props.fetchIds()
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
		return <WrappedComponent requestDetail={this.requestDetail} loading={this.state.loading} {...this.props} />;
	  }
	};
  }

class DashBoardComponent extends Component {


	renderItem = (idx, key) => {

		const { vouchers, voucherIds } = this.props

		const voucher = vouchers[voucherIds[idx]]

		console.log("P", this.props, voucher, vouchers, idx)

		if (!voucher) {
			return null
		}
		this.props.requestDetail(voucher.id)

		return (<div key={key} className="p-grid list-group-item">
		{voucher.code ? (
			<React.Fragment>
			<div className="p-col-3">{voucher.code}</div>
			<div className="p-col-3">{voucher.updated_at}</div>
			<div className="p-col-3">{voucher.duration}</div>
			<div className="p-col-3">{voucher.notes}</div>
			</React.Fragment>
			) : <Loading className="smaller" />}
			</div>)
	}

    render() {
		const {loading, voucherIds} = this.props;
		console.log(voucherIds)
        return loading ? <Loading /> : (
			<div className="container">
			<div className="heading">
				<h2>Current Vouchers
				<Button className="float-right" label="Add Voucher" />
				</h2>
			</div>

			<div className="list-group">
				<div className="p-grid list-group-item list-group-item-dark">
					<div className="p-col-3">Code</div>
					<div className="p-col-3">Created</div>
					<div className="p-col-3">Duration</div>
					<div className="p-col-2">Notes</div>
				</div>
				<ReactList
				  itemRenderer={this.renderItem}
				  length={voucherIds.length}
				  type="simple"
				  useTranslate3d
				  />
			</div>









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
	fetchDetail: voucherActions.fetchVouchersDetail
})(DashBoard)
