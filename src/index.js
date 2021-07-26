import React from 'react';
import ReactDOM from 'react-dom';
// 首先我们需要导入一些组件...
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'src/styles/index.scss';
import Layout from 'src/layout';
import Login from 'src/Login';

import reportWebVitals from 'src/utils/reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/" component={Layout}></Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// 如果你想开始在你的应用程序中测量性能，传递一个函数
//记录结果（例如：reportWebVitals（console.log））
//或发送到分析端点。了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
