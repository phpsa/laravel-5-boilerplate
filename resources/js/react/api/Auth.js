/* global Site */
import FetchApi, {fetchGet} from './Abstract'

class AuthModel extends FetchApi {

	api_url = `/api/auth`

	checkSession = () => {
		return fetchGet(`${this.api_url}/session`)
	}
}

export default new AuthModel()
