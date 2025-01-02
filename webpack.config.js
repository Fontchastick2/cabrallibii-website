module.exports = {
  // ... other webpack configurations
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        // Exclude the problematic package
        exclude: /@fullpage\/react-fullpage/,
      },
    ],
  },
  // Ignore source map warnings from specific packages
  ignoreWarnings: [
    {
      module: /@fullpage\/react-fullpage/,
      message: /Failed to parse source map/,
    },
  ],
};
