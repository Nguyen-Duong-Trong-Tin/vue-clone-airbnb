import {
  createTicketApi,
  deleteTicketApi,
  findTicketByIdApi,
  findTicketsApi,
  updateTicketApi,
} from "@/apis/ticket";

const state = () => {
  return {
    userProfileTickets: [],
    adminTickets: [],
    adminDetailTicket: null,
  };
};

const getters = {};

const mutations = {
  setUserProfileTicketsMutation(state, payload) {
    state.userProfileTickets = payload;
  },
  setAdminTicketsMutation(state, payload) {
    state.adminTickets = payload;
  },
  setAdminDetailTicketMutation(state, payload) {
    state.adminDetailTicket = payload;
  },
};

const actions = {
  async createTicketAction(_, payload) {
    const response = await createTicketApi(payload);
    return response;
  },
  async updateTicketAction(_, { id, payload }) {
    const response = await updateTicketApi(id, payload);
    return response;
  },
  async deleteTicketAction(_, id) {
    const response = await deleteTicketApi(id);
    return response;
  },
  async findUserProfileTicketsAction(context, query) {
    const response = await findTicketsApi(query);
    context.commit("setUserProfileTicketsMutation", response.data.items);
    return response;
  },
  async findAdminTicketsAction(context, query) {
    const response = await findTicketsApi(query);
    context.commit("setAdminTicketsMutation", response.data.items);
    return response;
  },
  async findAdminDetailTicketAction(context, id) {
    const response = await findTicketByIdApi(id);
    context.commit("setAdminDetailTicketMutation", response.data);
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
