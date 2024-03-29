module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            src: './src',
            assets: './src/assets',
            screens: './src/screens',
            navigations: './src/navigations',
            components: './src/components',
            contexts: './src/contexts',
          },
        },
      ],
    ],
  };
};
