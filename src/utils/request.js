/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 14:44:53
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-18 16:29:51
 */
import axios from 'axios';
import { message } from 'antd';
// import { useHistory } from 'react-router-dom';
import { getToken } from 'src/utils/auth';
import NProgress from 'nprogress'; // 页面顶部加载进度条
import 'nprogress/nprogress.css'; // 页面顶部加载进度条样式
NProgress.configure({ showSpinner: false }); // NProgress Configuration
// let history = useHistory();
// 创建axioc实例
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API // 请求url = baseURL + requestUrl
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    NProgress.start();
    // 设置身份认证信息
    config.headers['Authorization'] = getToken();
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    NProgress.done();
    const res = response.data;
    const code = res.code;
    // if the custom code is not 200, it is judged as an error.
    if (code === 403) {
      message.error('重新登录');
      // history.replace({
      //   pathname: '/login'
      // });
    } else if (code !== 200) {
      message.error(res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    NProgress.done();
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
