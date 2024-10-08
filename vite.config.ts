/// <reference types="vitest" />

import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		remix({
			ssr: false,
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		tsconfigPaths(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'setup-vitest.ts',
		/**
		 * for in-source testing.
		 * {@link https://vitest.dev/guide/in-source.html}
		 */
		includeSource: ['src/**/*.{ts,tsx}'],
	},
});
