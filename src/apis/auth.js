import axiosApi from ".";

export const registerApi = async (payload) => {
  const response = await axiosApi.post("/auth/register", payload);
  return response;
};

export const loginApi = async (payload) => {
  const response = await axiosApi.post("/auth/login", payload);
  return response;
};

export const meApi = async (payload) => {
  const response = await axiosApi.post("/auth/me", payload);
  return response;
};
