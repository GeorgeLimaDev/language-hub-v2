import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://georgelimadev.github.io',
	base: '/language-hub-v2',
	integrations: [
		starlight({
			title: 'VTEX Language Hub',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Style Guides',
					items: [
						{ label: 'EN Localization', link: '/style_guides/temp/' },
					],
				},
				{
					label: 'Glossaries',
					items: [
						{ label: 'Localization', link: '/glossaries/temp/' }
					],
				},
				{
					label: 'Translation Memories',
					items: [
						{ label: 'Localization', link: '/translation_memories/temp/' }
					],
				},
				{
					label: 'Admin Review Logs',
					items: [
						{ label: 'EN Admin standardization', link: '/admin_review_logs/temp/' }
					],
				}
			],
		}),
	],
});
