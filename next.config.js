const withCSS = require('@zeit/next-css');

envDevelopment = {};

envProduction = {};

module.exports = withCSS({
	env: process.env.NODE_ENV === 'production' ? envProduction : envDevelopment,
});
