import { createStore } from 'redux';

const commonState = {
  token: '1',
  userInfo: { a: 1 }
};
function common(state = commonState, action) {
  console.log('action', action);
  console.log('{ ...state, ...action }', { ...state, ...action });
  return state;
}

let commonStore = createStore(common);
commonStore.subscribe(() => console.log(commonStore.getState()));
commonStore.dispatch({
  token: '12312312'
});
export default commonStore;
