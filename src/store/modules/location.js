import { findLocationsApi } from "@/apis/location";

const state = () => {
  return {
    locations: [],
  };
};

const getters = {};

const mutations = {
  setLocationsMutation(state, payload) {
    state.locations = payload;
  },
};

const actions = {
  async findLocationsAction(context, payload) {
    const { data } = await findLocationsApi(payload);
    context.commit("setLocationsMutation", data.items);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
