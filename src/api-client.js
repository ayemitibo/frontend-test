import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://swapi.dev/api/",
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  return config;
});
apiClient.interceptors.response.use((response) => {
  return response.data;
});

export default apiClient;
