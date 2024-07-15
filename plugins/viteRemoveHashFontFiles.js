export default function viteRemoveHashFontFiles() {
	return {
		name: 'Remove hash from font files',
		apply: 'build',
		enforce: 'post',
		config(config) {
			const fileNames = config.build.rollupOptions.output.assetFileNames;
			config
                .build
                .rollupOptions
                .output
                .assetFileNames = ({ type, name }) => {
                    if (type === 'asset' && /\.(woff2?|ttf|otf)$/.test(name)) {
                        return `fonts/[name].[ext]`;
                    }
				return fileNames;
			};
		}
	};
}