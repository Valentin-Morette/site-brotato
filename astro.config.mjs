// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [tailwind()],
	site: 'https://valentin-morette.github.io',
	base: 'site-brotato',
});
