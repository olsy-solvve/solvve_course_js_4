const TOKEN_KEY = 'jwt-token'

const userStore = {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY) || null,
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    logout(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  getters: {
    isAuthUser(state) {
      return !!state.token;
    },
  },
  // getters: {
  //   token(state) {
  //     return state.token
  //   },
  //   isAuthUser(_ , getters) {
  //     return !!getters.token;
  //   },
  // },
};

export default userStore;
