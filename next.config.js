/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['sa.anshgoyal.com']
	},
	env: {
		PUBLIC_URL: process.env.PUBLIC_URL
	}
};

module.exports = nextConfig;
