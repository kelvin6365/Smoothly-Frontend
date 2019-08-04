const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');
const port = process.env.PORT || 3099;

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		publicPath: '/',
		path: path.resolve(process.cwd(), 'www'),
		filename: 'bundle.[hash].js'
	},
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/, //css files
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test: /\.scss$/, // scss & css files
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 1 }
					},
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
			},
			{
				//output all in path: assets/images/[name]-[sha512:hash:base64:7].[ext]
				test: /\.(jpe?g|png|gif)$/, // all image files
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: 'assets/images/[name]-[sha512:hash:base64:7].[ext]'
				}
			},
			{
				//output all in path: assets/images/[name]-[sha512:hash:base64:7].[ext]
				test: /\.svg$/, // all image files
				loader: 'file-loader',
				query: {
					limit: 10000,
					name: 'assets/images/[name].[ext]'
				}
			},
			{
				//output all in path: assets/font/[name]-[sha512:hash:base64:7].[ext]
				test: /\.(ttf|eot|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, // all font files
				loader: 'file-loader',
				query: {
					limit: 10000,
					name: 'assets/font/[name]-[sha512:hash:base64:7].[ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css',
			chunkFilename: 'assets/css/[id].css'
		}),
		new CleanWebpackPlugin()
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8000/graphql',
				pathRewrite: { '^/api': '' },
				secure: false
			}
		}
	}
};
