/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-05-12 11:36:53
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-15 15:11:31
 */
import request from '@/utils/request';
export const getJournalData = (params) => request.post('/get/journal', params);
export const saveJournalData = (params) => request.post('/save/journal', params);

export default {
  getJournalData: (params) => request.post('/get/journal', params),
  saveJournalData: (params) => request.post('/save/journal', params),
  deleteJournalData: (params) => request.post('/delete/journal', params)
};
