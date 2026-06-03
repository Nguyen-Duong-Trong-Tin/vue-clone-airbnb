import { createStore } from "vuex";

import location from "./modules/location";
import room from "./modules/room";
import auth from "./modules/auth";
import ticket from "./modules/ticket";
import user from "./modules/user";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    room,
    auth,
    ticket,
    user,
  },
});
