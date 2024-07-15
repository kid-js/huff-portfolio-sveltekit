import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import removeHashFontFiles from './plugins/viteRemoveHashFontFiles';
import cleanCss from 'vite-plugin-clean-css';

export default defineConfig({
    plugins: [
        cleanCss({
            level: {
                2: {
                    removeUnusedAtRules: true,
                },
            },
        }),
        removeHashFontFiles(),
        sveltekit(),
    ],
});