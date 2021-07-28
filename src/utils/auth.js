/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-04-27 14:54:34
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-18 16:18:36
 */

const tokenName = 'token' 
export function getToken() {
  return localStorage.getItem(tokenName)
}

export function setToken(token) {
  localStorage.setItem(tokenName, token)
}

export function removeToken() {
  localStorage.removeItem(tokenName)
}
