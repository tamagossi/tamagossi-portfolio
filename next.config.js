/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['webkit.org', 'thumbs.dreamstime.com'],
	},
};

module.exports = nextConfig;
