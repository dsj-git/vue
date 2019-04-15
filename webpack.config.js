module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env',{modules: false}]
				}
			}
			
		}]
	},
	plugins: [
        new VueLoaderPlugin()
    ]
}