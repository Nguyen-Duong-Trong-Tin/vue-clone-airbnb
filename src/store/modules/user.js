import { findUserByIdApi } from "@/apis/user";

const state = () => {
  return {
    userProfile: null,
  };
};

const getters = {};

const mutations = {
  setUserProfileMutation(state, payload) {
    state.userProfile = payload;
  },
};

const actions = {
  async findUserByIdAction(context, payload) {
    const response = await findUserByIdApi(payload);
    context.commit("setUserProfileMutation", response.data);
    return response;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
