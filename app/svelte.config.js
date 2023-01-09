import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/**
 * This will add autocompletion if you're working with SvelteKit
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(
			// default options are shown
			{
				pages: 'build',
				assets: 'build',
				fallback: null,
				strict: false
			}
		)
	},
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/PopIt' : ''
	}
};

export default config;
