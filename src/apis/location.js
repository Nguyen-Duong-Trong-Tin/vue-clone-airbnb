import axios from "axios";

export const findLocationsApi = async (payload) => {
  const name = payload?.name || "";

  const response = await axios.get(
    `http://localhost:8081/api/locations?name=${name}`
  );
  return response.data;
};
