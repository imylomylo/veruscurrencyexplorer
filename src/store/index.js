// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    rpcValue: 'https://rpc.vrsctest.komodefi.com',
    versionStatus: '0.1.0'
  },
  mutations: {
    updateRpcValue(state, newValue) {
      state.rpcValue = newValue;
    },
  },
});


