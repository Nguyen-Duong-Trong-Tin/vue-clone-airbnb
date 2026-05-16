import axiosApi from ".";

export const findLocationsApi = async (payload) => {
  const name = payload?.name || "";

  const response = await axiosApi.get(`/locations?name=${name}`);
  return response;
};
