import { findRoomByIdApi, findRoomsApi } from "@/apis/room";

const state = () => {
  return {
    rooms: [],
    roomDetail: null,
  };
};

const getters = {};

const mutations = {
  setRoomsMutation(state, payload) {
    state.rooms = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  },
};

const actions = {
  async findRoomsAction(context, payload) {
    const { data } = await findRoomsApi(payload);
    context.commit("setRoomsMutation", data.items);
  },
  async findRoomByIdAction(context, payload) {
    const response = await findRoomByIdApi(payload);
    context.commit("setRoomDetailMutation", response.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
