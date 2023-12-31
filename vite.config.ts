import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import postcssNesting from "postcss-nesting"

export default defineConfig({
	plugins: [sveltekit()],
	css: {
        postcss: {
            plugins: [
                // polyfill for nesting css (not widely supported yet)
                postcssNesting(),
			],
		},
	},
});
