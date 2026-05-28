/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	/* cacheComponents: true, */
	experimental: {
		useCache: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "nightclub-api.onrender.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
