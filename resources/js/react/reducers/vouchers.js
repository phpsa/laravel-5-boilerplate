import {
	createReducers
} from 'cd-redux-helpers'
import { createReducerIds } from 'cd-redux-helpers/dist/reducers'



const reduceIds = createReducerIds('vouchers')

export const ids = (state = [], action) => {
	if( action.type === 'SET_VOUCHERS_POS') {
		const ids = state.filter(id => id !== action.id)
		ids.splice(action.pos, 0, action.id)
		return ids
	}
	return reduceIds(state, action)
}



export default createReducers('vouchers', ['byId', 'loading', 'error'], {ids})

export const getVouchers = (state) => Object.values(state.byId)
export const getVoucherIds = (state) => state.ids
export const getVouchersById = (state) => state.byId
export const getVoucherById = (state, id) => state.byId[id]
export const getVouchersLoading = (state) => state.loading
export const getVouchersError = (state) => state.error
