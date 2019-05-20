import Auth  from '../api/Auth'

export const fetchSession = () => async (dispatch, getState) => {

	try {
		const response = await Auth.checkSession()
		console.log(response)

		dispatch({type: 'SET_SESSION_DATA', userdata: response})

		return response

	} catch(e) {
		if( 'redirect' in e) return null
		console.error(e)
		throw e
	}
}
