const userStore = {
  namespaced: true,
  state() {
    return {
      isAuth: localStorage.getItem("token") || false,
    };
  },
  getters: {
    isAuthUser(state) {
      return !!state.isAuth;
    },
  },
};

export default userStore;
