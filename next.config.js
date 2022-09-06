/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['sa.anshgoyal.com']
	}
};

module.exports = nextConfig;
