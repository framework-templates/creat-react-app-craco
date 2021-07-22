import React from 'react';
import ReactDOM from 'react-dom';
import 'src/styles/index.scss';
import App from 'src/views/App';
import reportWebVitals from 'src/utils/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 如果你想开始在你的应用程序中测量性能，传递一个函数
//记录结果（例如：reportWebVitals（console.log））
//或发送到分析端点。了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
