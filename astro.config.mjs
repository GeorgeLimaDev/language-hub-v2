import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Style Guides',
					items: [
						{ label: 'Example doc', link: '/style_guides/temp/' },
					],
				},
				{
					label: 'Glossaries',
					items: [
						{ label: 'Example doc', link: '/glossaries/temp/' }
					],
				},
				{
					label: 'Translation Memories',
					items: [
						{ label: 'Example doc', link: '/translation_memories/temp/' }
					],
				},
				{
					label: 'Admin Review Logs',
					items: [
						{ label: 'Example doc', link: '/admin_review_logs/temp/' }
					],
				}
			],
		}),
	],
});
