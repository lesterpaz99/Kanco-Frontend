/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				// port: 'localhost:3000',
				// pathname: '',
			},
		],
	},
};

module.exports = nextConfig;
