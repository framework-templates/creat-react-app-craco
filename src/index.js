import React from 'react';
import ReactDOM from 'react-dom';
// 首先我们需要导入一些组件...
import Routes from '@/routes';
import '@/styles/index.scss';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'highlight.js/styles/atom-one-dark.css';
import reportWebVitals from '@/utils/reportWebVitals';

ReactDOM.render(<Routes />, document.getElementById('root'));

// 如果你想开始在你的应用程序中测量性能，传递一个函数
//记录结果（例如：reportWebVitals（console.log））
//或发送到分析端点。了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
