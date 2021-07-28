/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 15:49:02
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-20 14:04:35
 */
import request from 'src/utils/request';

export const login = (params) => request.post('/public/login', params);

export default {
  login: (params) => request.post('/public/login', params),
  getUser: () => request.get('/getUser'),
  upload: (params) =>
    request.post('/public/upload', params, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
};
