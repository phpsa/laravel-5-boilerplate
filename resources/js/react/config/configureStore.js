/* eslint-disable semi */
/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod');
} else {
	module.exports = require('./configureStore.dev');
}
