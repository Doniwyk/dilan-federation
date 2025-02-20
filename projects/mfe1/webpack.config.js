// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({

//   name: 'mfe1',

//   exposes: {
//     './Component': './projects/mfe1/src/app/app.component.ts',
//   },

//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },

// });

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe1',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './projects/mfe1/src/app/pages/pages.module.ts',
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  }),
});