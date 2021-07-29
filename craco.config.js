const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');
const path = require('path');
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  port: '',
  webpack: {
    alias: {
      '@': pathResolve('src')
    }
  },
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          style: 'css'
        }
      ]
    ]
  }
};
