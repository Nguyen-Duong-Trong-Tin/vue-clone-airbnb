import { loginApi, meApi, registerApi } from "@/apis/auth";
import { getCookie } from "@/utils/cookies";

const state = () => {
  return {
    userLoginedIn: null,
  };
};

const getters = {};

const mutations = {
  setUserLoginedInMutation(state, payload) {
    state.userLoginedIn = payload;
  },
};

const actions = {
  async registerAction(_, payload) {
    const response = await registerApi(payload);
    return response;
  },
  async loginAction(context, payload) {
    const response = await loginApi(payload);
    context.commit("setUserLoginedInMutation", response.data.user);
    return response;
  },
  async initAction(context) {
    if (context.state.userLoginedIn) {
      return context.state.userLoginedIn;
    }

    const accessToken = getCookie("accessToken");
    if (!accessToken) {
      return null;
    }

    try {
      const response = await meApi({ accessToken });
      context.commit("setUserLoginedInMutation", response.data);
      return response.data;
    } catch (error) {
      context.commit("setUserLoginedInMutation", null);
      return null;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
