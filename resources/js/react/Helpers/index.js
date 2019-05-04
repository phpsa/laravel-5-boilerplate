import React from 'react'
/**
 * deep clone an object
 * @param {object} obj - the object to clone
 * @return {object} cloned object
 */
export const deepClone = (obj) => {
	return JSON.parse(JSON.stringify(obj))
}

/**
 * Simple object check.
 * @param {mixed} item - the item to check if is an object
 * @return {boolean} whether the item is an object or not
 */
export const isObject = (item) => {
	return (item && typeof item === 'object' && !Array.isArray(item) && null !== item)
}

// based off of http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric/1830844#1830844
export const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n)

// Check if character is a fraction, e.g. ¼
export const isFractionalChar = (n) => {
	const c = n.charCodeAt()
	return (c >= 188 && c <= 190) || (c >= 8531 && c <= 8542)
}


// return the first fractional character in a string
// return false if there is none
// Could easily return the index of the character, but this creates a parallelism with RegExp.exec
export const indexFractionalChar = (m) => {
	const a = m.split('')
	for (let i in a) {
		if (isFractionalChar(a[i])){
			return i
		}
	}
	return false
}


/**
 * Deeply merge two objects.
 * @param {object} target - the target object to merge into
 * @param {object} ...sources - the object to merge into the target object
 * @return {object} the cloned object
 */
export const deepMerge = (target, ...sources) => {
	if (!sources.length) return target
	const source = sources.shift()

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} })
				deepMerge(target[key], source[key])
			} else {
				Object.assign(target, { [key]: source[key] })
			}
		}
	}

	return deepMerge(target, ...sources)
}


/**
 * Return a copy of an object excluding the given key, or array of keys. Also accepts an optional filter function as the last argument.
 * @param {object} obj object to filter
 * @param {mixed} props either a string or array of keys to omit
 * @param {function} fn function to handle the filtering
 * @return {object} object of filtered keys
 */
export const omit = (obj, props, fn) => {
	if (!isObject(obj)) return {}
	if (typeof props === 'function') {
		fn = props
		props = []
	}
	if (typeof props === 'string') {
		props = [props]
	}
	var isFunction = typeof fn === 'function'
	var keys = Object.keys(obj)
	var res = {}

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i]
		var val = obj[key]

		if (!props || (props.indexOf(key) === -1 && (!isFunction || fn(val, key, obj)))) {
			res[key] = val
		}
	}
	return res
}

/* simple has basedon string  */
export const hashCode = (str) => {
	return str.split('').reduce((prevHash, currVal) =>
		(((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0)
}
/**
 * Loads a script to the docuemnt
 * @param {string} src URL for the third-party library being loaded.
 * @param {string} id unique id for the element
 * @param {function} callback callback function
 * @returns {void}
 */
export const loadScript = (src, id, callback) => {

	const scriptId = (typeof id === 'undefined') ? hashCode(src) : id
	const existingScript = document.getElementById(scriptId)

	if (!existingScript) {
		const script = document.createElement('script')
		script.src = src
		script.id = scriptId
		document.body.appendChild(script)
		script.onload = () => {
			if (callback) callback()
		}
	}
	if (existingScript && callback) callback()
}

export const ucFirst = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * converts linebreaks to Br elements
 * @param {string} str string to convert
 * @returns {string} updated string
 */
export const nl2br = (str) => {
	if (typeof str === 'number') {
		return str
	} else if (typeof str !== 'string') {
		return ''
	}

	const newlineRegex = /(\r\n|\r|\n)/g

	return str.split(newlineRegex).map(function(line, index) {
		if (line.match(newlineRegex)) {
			return React.createElement('br', { key: index })
		}
		return line
	})
}




/**
 * numberFormat(number, decimals, decPoint, thousandsSep) in JavaScript, known from PHP.
 * It formats a number to a string with grouped thousands, with custom seperator and custom decimal point
 * @param {number} number - number to format
 * @param {number} [decimals=0] - (optional) count of decimals to show
 * @param {string} [decPoint=.] - (optional) decimal point
 * @param {string} [thousandsSep=,] - (optional) thousands seperator
 * @returns {number} value
 */
export const numberFormat = (number, decimals = 0, decPoint = '.', thousandsSep = ',') => {
	decimals = Math.abs(decimals) || 0
	number = parseFloat(number)

	let roundedNumber = Math.round(Math.abs(number) * ('1e' + decimals)) + ''
	let numbersString = decimals ? (roundedNumber.slice(0, decimals * -1) || 0) : roundedNumber
	let decimalsString = decimals ? roundedNumber.slice(decimals * -1) : ''
	let formattedNumber = ''

	while (numbersString.length > 3) {
		formattedNumber += thousandsSep + numbersString.slice(-3)
		numbersString = numbersString.slice(0, -3)
	}

	if (decimals && decimalsString.length === 1) {
		while (decimalsString.length < decimals) {
			decimalsString = decimalsString + decimalsString
		}
	}

	return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '')
}


/**
  * Splits an address into the number and street part.
  * with input: "100 Main Street", outputs: {number: "100", space: ' ', street: "Main Street"}
  * The special sauce is handling fractional addresses.
  * With input "22½ Baker Street", outputs: {number: "22½", space: ' ', street: "Baker Street"}
  *
  * @param  {string} address An address with leading number
  * @param  {bool} splitType split street into street and type:
  * @return {Object} An object with the number, street and a space, for inserting between.
  * The space parameter is useful for situations where you want to glue the pieces back together for a user.
  * If user inputs "Main Street", without a number, .space is returned empty, so you don't have to bother testing
  * and just glue it like: x.number + x.space + x.street
  * while processing x.number and x.street separately on the back end.
*/
export const splitAddress = (address, splitType = false) => {
	const parts = address.trim().split(' ')
	let number

	if (parts.length <= 1){
		return {
			number: '',
			space: '',
			street: splitType ? splitStreet(address.trim()): address.trim()
		}
	}

	if (isNumber(parts[0].substr(0, 1)) || isFractionalChar(parts[0].substr(0, 1))) {
		number = parts.shift()
	}else{
		return {
			number: '',
			space: '',
			street: splitType ? splitStreet(address.trim()): address.trim()
		}
	}

	if (/[0-9]\/[0-9]/.exec(parts[0]) || indexFractionalChar(parts[0]) !== false)
	{
		number += ' ' + parts.shift()
	}

	return {
		number: number,
		space: ' ',
		street: splitType ? splitStreet(parts.join(' ')): parts.join(' ')
	}

}

export const streetTypes = ['Street','Road','Lane','Alley','Approach','Arcade','Avenue','Boulevard','Brow','Bypass','Causeway','Circuit','Circus','Close','Copse','Corner','Cove','Court','Crescent','Drive','End','Esplanande','Flat','Freeway','Frontage','Gardens','Glade','Glen','Green','Grove','Heights','Highway','Link','Loop','Mall','Mews','Packet','Parade','Park','Parkway','Place','Promenade','Reserve','Ridge','Rise','Row','Square','Strip','Tarn','Terrace','Thoroughfare','Track','Trunkway','View','Vista','Walk','Way','Walkway','Yard']

export const splitStreet = (street) => {

	const parts = street.split(' ')
	if(parts.length <= 1){
		return {
			street: street,
			type: '',
		}
	}

	let street_name = parts.slice(0, -1).join(' ')
	let street_type = street.match(/\s([\w]+)$/)

	if(street_type !== null){

		if(streetTypes.indexOf(ucFirst(street_type[1].toLowerCase())) === -1 ){
			street_name += ` ${street_type[1]}`
			street_type = null
		}
	}


	return {
		street: street_name !== null ? street_name : '',
		type: street_type !== null ? ucFirst(street_type[1].toLowerCase()) : '',
	}
}
