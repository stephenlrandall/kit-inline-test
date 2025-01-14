import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'fallback.html'
		}),
		files: {
			lib: "assets"
		},
		output: {
			bundleStrategy: 'inline'
		},
		router: {
			type: 'hash'
		}
	}
};

export default config;
