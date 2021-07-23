import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import 'src/styles/index.scss';
import Layout from 'src/layout';
import reportWebVitals from 'src/utils/reportWebVitals';

ReactDOM.render(<Layout>路由组件块</Layout>, document.getElementById('root'));

// 如果你想开始在你的应用程序中测量性能，传递一个函数
//记录结果（例如：reportWebVitals（console.log））
//或发送到分析端点。了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
