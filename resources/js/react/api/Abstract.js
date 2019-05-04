//Polyfills
import 'whatwg-fetch' //this is for ie11
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'

/** Fetch Methods - helper utilities */

const defaultFetchHandlers = {
	'HEAD'   : res => res,
	'GET'    : res => res,
	'PUT'    : res => res,
	'POST'   : res => res,
	'PATCH'  : res => res,
	'DELETE' : res => res,
}

let composedFetchHandlers = {...defaultFetchHandlers}


export const setBearerToken = (token) => {
	if(token){
		sessionStorage.setItem('bearer', token)
	}else{
		sessionStorage.removeItem('bearer')
	}
}

export const getBearerToken = () => {
	return sessionStorage.getItem('bearer')
}

/**
 * Accept a new set of global fetch handlers.
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {Object}  [handlers={}] [description]
 * @return {[type]}               [description]
 */
export const composeFetchHandlers = (handlers = {}) => {

	composedFetchHandlers = {
		...defaultFetchHandlers,
		...handlers
	}

	return composedFetchHandlers
}

/**
 *  Lowest base form of fetch, provides timeout option.
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param  {string}  url      the url to call
 * @param  {object}  options  options to pass through with the call.
 * @return {Promise}          Returns a promise that will be resolved after timeout.
 */
export const fetchWrapper = (url, options = {}) => {

	//Make suer we have our ajax request header sent for the api responses to make sure they know we are ffom an ajax requrest
	options.headers = options.headers || {}
	options.headers['X-Requested-With'] = 'XMLHttpRequest'

	const bearer = getBearerToken()
	if(bearer){
		options.headers['Authorization'] = `Bearer ${bearer}`
	}

	const token = document.head.querySelector('meta[name="csrf-token"]');

	if (token) {
		options.headers['X-CSRF-TOKEN'] = token.content;
	}

	const request = fetch(url, options)

	if(typeof options.timeout === 'undefined' || Number(options.timeout) === 0){
		return request
	}else{
		return Promise.race([timeout(options.timeout), request])
	}
}

/**
 *  Fetch expecting a json response.
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param  {string}  url     the url to call
 * @param  {object}  options options to pass through with the call.
 * @return {Promise}         Returns a promise that will be resolved after timeout.
 */
export const fetchJSON = (url, options = {}) => {

	const defaults = {
		method 	: 'GET',
		headers : {
			'Accept': 'application/json'
		}
	}

	const settings = { ...defaults, ...options }
	const handleResponseComposed = composedFetchHandlers[settings.method] || (res => res)

	return fetchWrapper(url, settings)
		.then(handleResponseComposed, handleNetworkError)
		.then(handleResponseJson)
		.catch(error => {
			if (error.name === 'AbortError') { return } // expected, this is the abort, so just return
			throw error // must be some other error, handle however you normally would
		})
}

/**
 *  Do a Post expecting a json response.
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param  {string}  url     the url to call
 * @param  {mixed}   data    the data to post through
 * @param  {object}  options options to pass through with the call.
 * @return {Promise}         Returns a promise that will be resolved after timeout.
 */
export const postJSON = (url, data, options = {}) => {

	const defaults = {
		method 	: 'POST',
		body 	: JSON.stringify(data),
		headers : {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	const settings = { ...defaults, ...options }
	const handleResponseComposed = composedFetchHandlers[settings.method] || (res => res)

	return fetchWrapper(url, settings).then(handleResponseComposed, handleNetworkError).then(handleResponseJson)
}

/**
 * Handles the json format response
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param {mixed} response The response to try to parse as JSON
 * @returns {Promise} The fetch promise result
 * @throws error
 */
const handleResponseJson = (response) => {
	if (response.ok) {
		return response.json()
	} else {
		return response.json().then((error) => {
			throw error
		})
	}
}

/**
 * Handles network error and throws error.
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param {object} error The error object to handle.
 * @returns {Promise} The fetch promise result
 */
const handleNetworkError = (error) => {
	throw {
		msg: error.message
	}
}

/**
 * Handles the timeout functionality of a fetch call
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param {number} value The request timeout to use
 * @returns {Promise} The fetch promise result
 */
const timeout = (value) => new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject(new Error('Sorry, request timed out.'))
	}, value)
})


/**
 * fetchHead does a get to a specific url including the credentials option
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param {string} url     The URL we want to fetch
 * @param {object} options Any additonal options for this request
 * @returns {Promise} The fetch promise result
 */
export const fetchHead = (url, options = {}) => {

	const defaults = {
		method      : 'HEAD',
		credentials : 'include',
		headers     : {
			'Accept'   : 'application/json'
		}
	}

	return fetchWrapper(url, { ...defaults, ...options }).then(response => response, handleNetworkError)
}


/**
 * fetchGet does a get to a specific url including the credentials option
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param {string} url     The URL we want to fetch
 * @param {object} options Any additional options for this request.
 * @returns {Promise} The fetch promise result
 */
export const fetchGet = (url, options = {}) => fetchJSON(url, {
	method 		: 'GET',
	credentials : 'include',
	...options
})

/**
 * Gets a new CancelToken for our abortable request
 */
export const CancelToken = new window.AbortController()

/**
 * High level AJAX POST method.
 *
 * Handles timeouts, adds credentials to requests, etc.
 * Expects to be JSON
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {String}  url          [description]
 * @param  {Object}  data         [description]
 * @param  {Object}  options	  Fetch options.
 *
 * @return {Promise}              Returns the fetch promise.
 */
export const fetchPost = (url, data, options = {}) => postJSON(url, data, {
	method      : 'POST',
	credentials : 'include',
	...options
})

/**
 * fetchDelete does a delete to a specific url including the credentials option
 *
 * @author Sam Sehnert <sam@customd.com>
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @param {string} url     The URL we want to fetch
 * @param {object} options Any additional options for this request.
 * @returns {Promise} The fetch promise result
 */
export const fetchDelete = (url, options = {}) => fetchJSON(url, {
	method 		: 'DELETE',
	credentials : 'include',
	...options
})

/**
 * High level AJAX PUT method.
 *
 * Handles timeouts, adds credentials to requests, etc.
 * Expects to be JSON
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {String}  url          [description]
 * @param  {Object}  data         [description]
 * @param  {Object}  options	  Fetch options.
 *
 * @return {Promise}              Returns the fetch promise.
 */
export const fetchPut = (url, data, options = {}) => postJSON(url, data, {
	method      : 'PUT',
	credentials : 'include',
	...options
})

/**
 * High level AJAX PATCH method.
 *
 * Handles timeouts, adds credentials to requests, etc.
 * Expects to be JSON
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {String}  url          [description]
 * @param  {Object}  data         [description]
 * @param  {Object}  options	  Fetch options.
 *
 * @return {Promise}              Returns the fetch promise.
 */
export const fetchPatch = (url, data, options = {}) => postJSON(url, data, {
	method      : 'PATCH',
	credentials : 'include',
	...options
})

/**
 * Converts an object into url parameters
 *
 * E.g., given input object;
 *
 *   {
 *     "user_id" : 12,
 *     "name" : "^john"
 * 	   "age"  : {min: 10, max: 18}
 * 	   "gender" : ['male','female']
 *   }
 *
 * This method would output;
 *
 *   "user_id=12&name=%5Ejohn&age[min]=10&age[max]=15&gender=male||female"
 *
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {Object}  params     Key -> value for parameter props.
 * @param  {string} prefix		prefix for the key if is an array input
 * @return {String}             The url parameters.
 */
export const fetchParams = (params, prefix) => {
	let getStr = [], param

	for (param in params)
	{
		if (params.hasOwnProperty(param))
		{
			let key = prefix ? prefix + '[' + param + ']' : param,
				value = params[param]

			if(value !== null && value !== undefined)
			{
				//If is an array of strings / numbers if there is a single object (that is not null (typeof null is 'object)) then
				// seperate as per normal - else use the object filter.
				if(Array.isArray(value) && value.filter(val => (typeof val === 'object' && val !== null)).length === 0)
				{
					getStr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value.join('||')))
				}
				else
				{
					getStr.push((typeof value === 'object') ?
						fetchParams(value, key) :
						encodeURIComponent(key) + '=' + encodeURIComponent(value))
				}
			}
		}
	}

	return getStr.join('&')
}


/**
 * converts to allow you to pass a with to the url api endpoint
 *
 * @param {string/array} withParam string or array of withs
 * @return {string} the with string seperated by ,
 */
export const parseWith = (withParam) => {
	if (typeof withParam !== 'string' && typeof withParam !== 'undefined') {
		return withParam.join(',')
	}
	return withParam
}

/**
 * Easily mock up an API response to a fetch request.
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {object}  data     The data to resolve the promise with.
 * @param  {number}  timeout  Promise will resolve after timeout (in ms). Defaults to 500 ms.
 * @return {Promise}          Returns a promise that will be resolved after timeout.
 */
export const fetchMock = (data,  timeout = 500) => (new Promise((resolve, reject) => {

	const response = {
		result: 'success',
		...data
	}

	setTimeout(() => resolve(response), timeout)
}))


/**
 * DEPRECATED: Easily mock up an API response to a fetch request.
 *
 * @author Sam Sehnert <sam@customd.com>
 *
 * @param  {object}  data     The data to resolve the promise with.
 * @param  {number}  timeout  Promise will resolve after timeout (in ms). Defaults to 500 ms.
 * @return {Promise}          Returns a promise that will be resolved after timeout.
 */
export const fetchGetMock = (data, timeout = 500) => {
	console.warn('fetchGetMock is deprecated, please use fetchMock instead.')
	return fetchMock(data, timeout)
}

/**
 * FetchApi - our default Return object is the base class for an Api Endpoint
 *
 * @export
 * @constructor FetchApi
 * @author Craig Smith <craig.smith@customd.com>
 *
 * @sample
 ```
  class XxxModel extends FetchApi {
   const api_url = Site.api_url + "xxx";
  }
  const Xxx = new xxxModel
  export default Xxx```
 *
 * The above will give you access to the endoints listed within the class
 */
export default class FetchApi {

	/**
	 * get - Method to return a standard get by id call
	 *
	 * @param {int} id        		the ID of the record to get
	 * @param {string} withs  		optional with to get with relations
	 * @param {object} cancelToken	The cancelToken object
	 * @returns {Promise}     		The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	get = (id, withs = '', cancelToken) => {
		const params = fetchParams({
			id,
			with: withs
		})
		const options = (typeof cancelToken === 'object' && 'signal' in cancelToken) ? { signal: cancelToken.signal} : {}
		return fetchGet(`${this.api_url}?${params}`, options)
	}


	/**
	 * get where with an
	 *
	 * @param {any} where where options
	 * @param {any} sort sort options
	 * @param {any} limit limit option
	 * @param {any} offset offset option
	 * @param {object} cancelToken	The cancelToken object
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	*/
	getWhere = (where, sort, limit, offset, cancelToken) => {

		const params = fetchParams({
			...where,
			sort,
			limit,
			offset
		})
		const options = (typeof cancelToken === 'object' && 'signal' in cancelToken) ? { signal: cancelToken.signal} : {}

		return fetchGet(`${this.api_url}?${params}`, options)
	}

	/**
	 * Get query with related tables and a where clause
	 *
	 * @param {string} withItems with options
	 * @param {any} where where options
	 * @param {any} sort sort options
	 * @param {any} limit limit option
	 * @param {any} offset offset option
	 * @param {object} cancelToken	The cancelToken object
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	getWith = (withItems, where, sort, limit, offset, cancelToken) => {
		const withParam = parseWith(withItems)
		const params = fetchParams({
			...where,
			sort,
			limit,
			offset,
			with: withParam
		})
		const options = (typeof cancelToken === 'object' && 'signal' in cancelToken) ? { signal: cancelToken.signal} : {}
		return fetchGet(`${this.api_url}?${params}`, options)
	}

	/**
	 * Performs a basic post to the api endpoint
	 *
	 * @param {array|object} data data to send
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	post = (data) => {
		return fetchPost(this.api_url, data)
	}

	/**
	 * Performs a basic post to the api endpoint with the with keywords
	 *
	 * @param {array|object} withItems with request
	 * @param {array|object} data data to send
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	postWith = (withItems, data) => {
		const withParam = parseWith(withItems)
		const params = fetchParams({
			with : withParam
		})
		return fetchPost(`${this.api_url}?${params}`, data)
	}

	/**
	 * Performs a basic put to the api endpoint
	 *
	 * @param {array|object} data data to put
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	put = (data)=> {
		return fetchPut(this.api_url, data)
	}

	/**
	 * Performs a basic post to the api endpoint with the with keywords
	 *
	 * @param {array|object} withItems with request
	 * @param {array|object} data data to put
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	putWith = (withItems, data) => {
		const withParam = parseWith(withItems)
		const params = fetchParams({
			with: withParam
		})
		return fetchPut(`${this.api_url}?${params}`, data)
	}

	/**
	 * Performs a basic put to the api endpoint
	 *
	 * @param {array|object} data data to patch
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	patch = (data)=> {
		return fetchPatch(this.api_url, data)
	}

	/**
	 * Performs a basic patch to the api endpoint with the with keywords
	 *
	 * @param {array|object} withItems with request
	 * @param {array|object} data data to patch
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	patchWith = (withItems, data) => {
		const withParam = parseWith(withItems)
		const params = fetchParams({
			with: withParam
		})
		return fetchPatch(`${this.api_url}?${params}`, data)
	}

	/**
	 * Delete based on id passed
	 *
	 * @param {int} id
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */

	delete = (id) => {
		return fetchDelete(`${this.api_url}?id=${id}`)
	}

	/**
	 * delete query with  a where clause
	 *
	 * @param {object|array} where where options
	 * @param {any} sort sort value
	 * @param {any} limit limit option
	 * @param {any} offset record offset
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	deleteWhere = (where, sort, limit, offset) => {
		const params = fetchParams({
			...where,
			sort,
			limit,
			offset
		})
		return fetchDelete(`${this.api_url}?${params}`)
	}

	/**
	 * Performs a mock api call so that the actions can be tested before api endpoint is active
	 *
	 * @param {mixed} data data to return from teh mock
	 * @param {number} timeout for failure default 500ms
	 * @returns {Promise}     The fetch promise result
	 *
	 * @memberOf FetchApi
	 */
	getMock = (data, timeout = 500) => {
		return fetchMock(data, timeout)
	}
}
