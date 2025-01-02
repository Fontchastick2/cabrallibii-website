const path = require('path');

module.exports = function override(config, env) {
  // Add rule to ignore source map warnings for specific packages
  config.module.rules.push({
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: /@fullpage\/react-fullpage/,
  });

  // Ignore source map warnings from specific packages
  config.ignoreWarnings = [
    {
      module: /@fullpage\/react-fullpage/,
      message: /Failed to parse source map/,
    },
  ];

  return config;
};
