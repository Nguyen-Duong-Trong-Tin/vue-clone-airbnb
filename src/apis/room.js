import axiosApi from ".";

export const findRoomsApi = (query) => {
  const page = query.page || 0;
  const size = query.size || 20;
  const locationId = query.locationId;

  let url = `/rooms?page=${page}&size=${size}`;
  if (locationId) {
    url += `&locationId=${locationId}`;
  }

  return axiosApi.get(url);
};

export const findRoomByIdApi = (id) => {
  return axiosApi.get(`/rooms/${id}`);
};
