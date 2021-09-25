import axios from "axios";

axios.defaults.baseURL = "https://banks-app-project.herokuapp.com";

export const getAllBanks = () =>
  axios.get("/api/banks").then(({ data }) => data);

export const addNewBank = (bank) => axios.post("/api/banks", bank);

export const deleteBank = (bankId) => axios.delete(`/api/banks/${bankId}`);

export const updateBank = (bankId, updatedBank) =>
  axios.put(`/api/banks/${bankId}`, updatedBank);
