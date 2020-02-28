const path = require('path');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
const webpack = require('webpack');

// plugins
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const plugins = [

	// new CircularDependencyPlugin({
	// 	allowAsyncCycles: true,
	// }),

	new webpack.LoaderOptionsPlugin({
		debug: true
	}),

	new SpriteLoaderPlugin({
		plainSprite: true
	})

];

module.exports = config => {

	console.log(config.module.rules);

	return config;
	// plugins: plugins,
  // module: {
  //   rules: [
  //     {
  //       test: /\.(webpacktestloader)$/i,
  //       use: [
  //         {
  //           loader: 'file-loader',
	// 					options: {
	// 						outputPath: 'test-webpack-loader',
	// 						name: '[name].[ext]',
	// 					}
  //         },
  //       ],
  //     },

	// 		// icon SVG spriter loader
	// 		{
	// 			test: /[\\/]icons-svg[\\/].+\.svg$/,
	// 			use: [

	// 				{
	// 					loader: 'svg-sprite-loader',
	// 					options: {
	// 						extract: true,
	// 						spriteFilename: 'icons-sprite.svg',
	// 						publicPath: '/icons-svg/'
	// 					}
	// 				},

	// 				{
	// 					loader: 'svgo-loader',
	// 					options: {
	// 						plugins: [
	// 							{convertStyleToAttrs: false},
	// 							{mergePaths: true},
	// 							{inlineStyles: false},
	// 							{
	// 								removeAttrs: {
	// 									attrs: '(fill|stroke)'
	// 								}
	// 							}
	// 						]
	// 					}
	// 				}

	// 			]
	// 		}

  //   ],
  // }
};
