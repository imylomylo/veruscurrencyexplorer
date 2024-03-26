// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    rpcValue: '192.168.1.1',
    versionStatus: '1.0'
  },
  mutations: {
    updateRpcValue(state, newValue) {
      state.rpcValue = newValue;
    },
  },
});


