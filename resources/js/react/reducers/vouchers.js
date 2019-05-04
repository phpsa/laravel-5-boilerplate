import {
	createReducers
} from 'cd-redux-helpers'

export default createReducers('vouchers', ['byId', 'ids', 'loading', 'error'])

export const getVouchers = (state) => Object.values(state.byId)
export const getVoucherIds = (state) => state.ids
export const getVouchersById = (state) => state.byId
export const getVoucherById = (state, id) => state.byId[id]
export const getVouchersLoading = (state) => state.loading
export const getVouchersError = (state) => state.error
