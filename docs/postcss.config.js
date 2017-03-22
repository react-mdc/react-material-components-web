module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('postcss-custom-properties')({
      preserve: true
    }),
    require('postcss-calc')({
      preserve: true
    }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
};
