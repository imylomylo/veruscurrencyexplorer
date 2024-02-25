// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    rpcValue: '',
  },
  mutations: {
    updateRpcValue(state, newValue) {
      state.rpcValue = newValue;
    },
  },
});


