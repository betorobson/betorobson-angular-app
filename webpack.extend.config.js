
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = config => {

	config.module.rules.map(rule => {
    if(/svg/.test(rule.test.toString())){
      Object.assign(
        rule,
        {
          exclude: /svg-icons/
        }
      );
    }
  });

  config.plugins.push(
    new SpriteLoaderPlugin({
      plainSprite: true
    })
  );

  config.module.rules.push(
    // icon SVG spriter loader
    {
      test: /[\\/]svg-icons[\\/].+\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename: 'icons.svg',
          }
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              {convertStyleToAttrs: false},
              {mergePaths: true},
              {inlineStyles: false},
              {
                removeAttrs: {
                  attrs: '(fill|stroke)'
                }
              }
            ]
          }
        }
      ]
    }
  );

	return config;
};
