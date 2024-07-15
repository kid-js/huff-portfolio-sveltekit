import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-node';

const config = {
    compilerOptions: {
        cssHash: ({ hash, css }) => {
            return `_${hash(css).slice(0, 4)}`;
        }
    },
    kit: {
        adapter: adapter(),
        inlineStyleThreshold: 515,
        prerender: {
            handleMissingId: 'warn',
        }
    },
};

export default config;