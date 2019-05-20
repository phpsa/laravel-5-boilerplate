import { combineReducers } from 'redux'

const userdata = (state = {}, action) => {
	switch(action.type){
		case 'SET_SESSION_DATA':
			return action.userdata
		case 'CLEAR_SESSION_DATA':
			return {}
		default:
			return state
	}
}

const userId = (state = null, action) => {
	switch(action.type){
		case 'SET_SESSION_DATA':
			if(action.userdata.id === undefined || action.userdata.id === ''){
				return null
			}
			return action.userdata.id
		default:
			return state
	}
}

export default combineReducers({
	userdata,
	userId
})


export const getIsLoggedIn = (state) => state.userId ? true : false
export const getSessionUserId = (state) => state.userId
export const getSessionUserdata = (state) => state.userdata
