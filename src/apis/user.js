import axiosApi from ".";

export const findUserByIdApi = async (userId) => {
  const response = await axiosApi.get(`/users/${userId}`);
  return response;
};
