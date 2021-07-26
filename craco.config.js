const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');
module.exports = {
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
