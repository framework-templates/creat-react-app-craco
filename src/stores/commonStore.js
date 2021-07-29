import { createStore } from 'redux';

const commonState = {
  token: '',
  userInfo: {}
};
function reducer(state, action) {
  if (action.type) {
    state[action.type] = action.value;
  }
  return state;
}

let commonStore = createStore(reducer, commonState);
export default commonStore;
