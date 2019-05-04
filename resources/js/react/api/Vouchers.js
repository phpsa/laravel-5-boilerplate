/* global Site */
import FetchApi, {fetchGet} from './Abstract'

class VouchersModel extends FetchApi {

	api_url = `/api/vouchers`


}

export default new VouchersModel()
