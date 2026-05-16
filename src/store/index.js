import { createStore } from "vuex";

import location from "./modules/location";
import room from "./modules/room";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    room,
  },
});
