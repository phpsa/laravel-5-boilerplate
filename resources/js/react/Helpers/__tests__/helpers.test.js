import {isNumber, isObject, splitAddress, splitStreet} from '../index'

it('Number values', () => {
	expect(isNumber(1)).toBe(true)
	expect(isNumber('not an number')).toBe(false)
})

it('Tests objects', () => {
	expect(isObject({test: true})).toBe(true)
	expect(isObject(['one','two'])).toBe(false)
})

const addressCases = [
	['100 Main Street', {number: '100', space: ' ', street: 'Main Street'}],
	// Address with directional indicator
	['100 South Main Street', {number: '100', space: ' ', street: 'South Main Street'}],
	// Fractional address with slash
	['100 1/2 Main Street', {number: '100 1/2', space: ' ', street: 'Main Street'}],
	// Fractional address number with fractional character
	['100½ Main Street', {number: '100½', space: ' ', street: 'Main Street'}],
	// Address number with leading fractional address
	['½ Main Street', {number: '½', space: ' ', street: 'Main Street'}],
	// Address number with letter
	['221B Baker Street', {number: '221B', space: ' ', street: 'Baker Street'}],
	// Numeric street name
	['100 10th Street', {number: '100', space: ' ', street: '10th Street'}],
	// Address with hyphen (common in Queens, NYC)
	['34-56 107th Street', {number: '34-56', space: ' ', street: '107th Street'}],
	// Multi-word street name
	['99 Dr. Martin Luther King, Jr. Blvd', {number: '99', space: ' ', street: 'Dr. Martin Luther King, Jr. Blvd'}],
	// Street name without address
	['Main Street', {number: '', space: '', street: 'Main Street'}],
	// Address with leading/trailing whitespace
	['  100 Main Street  ', {number: '100', space: ' ', street: 'Main Street'}],
	// Limitations

	// Street name that starts with a number
	// There is no way to distinguish between "6 Ave S" (a possible representation of a street, "Sixth Avenue South", in Manhattan)
	// from "6 Ave S" (a possible address on "Avenue S" in Brooklyn)
	// This script will treat it as an address:
	['6 Ave S', {number: '6', space: ' ', street: 'Ave S'}],
	// possibly also correct: {number: "", space: "", street: "6 Ave S"}
	// The problem also occurs on a numeric street name without an address
	// correct
	['42 Street', {number: '42', space: ' ', street: 'Street'}],
	// current result: {number: "42", space: " ", street: "Street"}
	// Address with one leading letter (common in Puerto Rico)
	// This fails. A solution would have to distinguish between this example and "E42 St",
	// which should be recognized as a street without an address number.
	// correct:
	['A19 Calle Amapola', {number: '', space: '', street: 'A19 Calle Amapola'}]
	// current result: {number: "", space: "", street: "A19 Calle Amapola"}
]

it('Splits Addresses', () => {
	addressCases.forEach((address) => {
		expect(splitAddress(address[0])).toEqual(address[1])
	})
})


const addressCasesSplit = [
	['100 Main Street', {number: '100', space: ' ', street: { street: 'Main', type: 'Street'}}],
	// Address with directional indicator
	['100 South Main Street', {number: '100', space: ' ', street: { street: 'South Main', type: 'Street'}}],
	// Fractional address with slash
	['100 1/2 Main Street', {number: '100 1/2', space: ' ', street: { street: 'Main', type: 'Street'}}],
	// Fractional address number with fractional character
	['100½ Main Street', {number: '100½', space: ' ', street: { street: 'Main', type: 'Street'}}],
	// Address number with leading fractional address
	['½ Main Street', {number: '½', space: ' ', street: { street: 'Main', type: 'Street'}}],
	// Address number with letter
	['221B Baker Street', {number: '221B', space: ' ', street: { street: 'Baker', type: 'Street'}}],
	// Numeric street name
	['100 10th Street', {number: '100', space: ' ', street: { street: '10th', type: 'Street'}}],
	// Address with hyphen (common in Queens, NYC)
	['34-56 107th Street', {number: '34-56', space: ' ', street: { street: '107th', type: 'Street'}}],
	// Multi-word street name
	['99 Dr. Martin Luther King, Jr. Blvd', {number: '99', space: ' ', street: { street: 'Dr. Martin Luther King, Jr. Blvd', type: ''}}],
	// Street name without address
	['Main Street', {number: '', space: '', street: { street: 'Main', type: 'Street'}}],
	// Address with leading/trailing whitespace
	['  100 Main Street  ', {number: '100', space: ' ', street: { street: 'Main', type: 'Street'}}],
	// Limitations

	// Street name that starts with a number
	// There is no way to distinguish between "6 Ave S" (a possible representation of a street, "Sixth Avenue South", in Manhattan)
	// from "6 Ave S" (a possible address on "Avenue S" in Brooklyn)
	// This script will treat it as an address:
	['6 Ave S', {number: '6', space: ' ', street: { street: 'Ave S', type: ''}}],
	// possibly also correct: {number: "", space: "", street: "6 Ave S"}
	// The problem also occurs on a numeric street name without an address
	// correct
	['42 Street', {number: '42', space: ' ', street: { street: 'Street', type: ''}}],
	// current result: {number: "42", space: " ", street: "Street"}
	// Address with one leading letter (common in Puerto Rico)
	// This fails. A solution would have to distinguish between this example and "E42 St",
	// which should be recognized as a street without an address number.
	// correct:
	['A19 Calle Amapola', {number: '', space: '', street: { street: 'A19 Calle Amapola', type: ''}}]
	// current result: {number: "", space: "", street: "A19 Calle Amapola"}
]

it('Splits Addresses Street', () => {
	addressCasesSplit.forEach((address) => {
		expect(splitAddress(address[0], true)).toEqual(address[1])
	})
})

it('Splits street Addresses', () => {
	expect(splitStreet('Main street')).toEqual({street: 'Main', type:'Street'})
})