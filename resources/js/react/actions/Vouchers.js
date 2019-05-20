import Vouchers from '../api/Vouchers'
import moment from 'moment'
import {ValidationError} from 'cd-react-forms'
import {
	createAddAction,
	createUpdateAction,
	createFetchAction,
	createFetchDetailAction,
	createLoadingAction,
	createErrorAction,
	createClearAction,
	SET_IDS_ONLY,
	createRemoveAction
} from 'cd-redux-helpers/dist/actions'



export const addVouchers = createAddAction('vouchers')
export const updateVouchers = createUpdateAction('vouchers')
export const clearVoucherIds = createClearAction('vouchers', SET_IDS_ONLY)
export const setVouchersLoading = createLoadingAction('vouchers')
export const setVouchersError = createErrorAction('vouchers')
export const removeVouchers = createRemoveAction('vouchers')

export const fetchVouchers = createFetchAction(
	[Vouchers.getWhere,{fields : 'id'}, 'updated_at desc'],
	( vouchers ) => {

		return (dispatch, getState) => {
			dispatch(clearVoucherIds())
			if(Array.isArray(vouchers)){
				dispatch(updateVouchers(vouchers))
			}
		}
	},
	{
		loadingAction: setVouchersLoading,
		errorAction: setVouchersError,
		responseData: 'data'
	}


)

export const fetchVouchersDetail = createFetchDetailAction(
	[Vouchers.getWhere,{}],
	updateVouchers,
	{
		loadingAction: setVouchersLoading,
		errorAction: setVouchersError,
		responseData: 'data'
	}
)


export const fetchVoucherDetail = createFetchDetailAction(
	[Vouchers.getById,{}, null, 0],
	(vouchers) => {

		return (dispatch, getState) => {
			dispatch(updateVouchers([mapFields(vouchers)]))
		}
	},
	{
		loadingAction: setVouchersLoading,
		errorAction: setVouchersError,
		responseData: 'data'
	}
)



export const setVouchersSortPosition = (id, pos ) => ({
	type: 'SET_VOUCHERS_POS',
	id,
	pos
})