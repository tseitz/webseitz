import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'$ws-root': './src',
			'$ws-types': './src/types',
			'$ws-stores': './src/stores',
			'$ws-abis': './src/abis'
		}
		// files: {
		// 	assets: 'src/lib/assets'
		// }
	}
};

export default config;
