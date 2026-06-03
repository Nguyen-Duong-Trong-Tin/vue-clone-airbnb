import axiosApi from ".";

export const createTicketApi = (payload) => {
  const response = axiosApi.post("/tickets", payload);
  return response;
};

export const updateTicketApi = (id, payload) => {
  const response = axiosApi.put(`/tickets/${id}`, payload);
  return response;
};

export const deleteTicketApi = (id) => {
  const response = axiosApi.delete(`/tickets/${id}`);
  return response;
};

export const findTicketsApi = (query) => {
  const response = axiosApi.get("/tickets", { params: query });
  return response;
};

export const findTicketByIdApi = (id) => {
  const response = axiosApi.get(`/tickets/${id}`);
  return response;
};
