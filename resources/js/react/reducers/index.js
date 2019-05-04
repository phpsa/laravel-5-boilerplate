import { combineReducers } from 'redux'

import session, * as fromSession from  './session'
import vouchers, * as fromVouchers from './vouchers'

const rootReducer = combineReducers({
	session,
	vouchers
})

// Session information
export const getIsLoggedIn = (state) => fromSession.getIsLoggedIn(state.session)
export const getSessionUserId = (state) => fromSession.getSessionUserId(state.session)
export const getSessionUserdata = (state) => fromSession.getSessionUserdata(state.session)


//vouchers
export const getVouchers = (state) => fromVouchers.getVouchers(state.vouchers)
export const getVoucherIds = (state) => fromVouchers.getVoucherIds(state.vouchers)
export const getVouchersById = (state) => fromVouchers.getVouchersById(state.vouchers)
export const getVoucherById = (state, id) => fromVouchers.getVoucherById(state.vouchers, id)
export const getVouchersLoading = (state) => fromVouchers.getVouchersLoading(state.vouchers)
export const getVouchersError = (state) => fromVouchers.getVouchersError(state.vouchers)

export default rootReducer
