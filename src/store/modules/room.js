import { findRoomsApi } from "@/apis/room";

const state = () => {
  return {
    rooms: [],
  };
};

const getters = {};

const mutations = {
  setRoomsMutation(state, payload) {
    state.rooms = payload;
  },
};

const actions = {
  async findRoomsAction(context, payload) {
    const { data } = await findRoomsApi(payload);
    context.commit("setRoomsMutation", data.items);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
