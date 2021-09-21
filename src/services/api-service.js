import axios from "axios";

axios.defaults.baseURL =
  "https://banks-app-1d6d4-default-rtdb.europe-west1.firebasedatabase.app/";

export const getAllBanks = () =>
  axios.get("/banks.json").then(({ data }) => data);

export const addNewBank = (bank) => axios.post("/banks.json", bank);

export const deleteBank = (bankId) => axios.delete(`/banks/${bankId}.json`);

export const updateBank = (bankId, updatedBank) =>
  axios.patch(`/banks/${bankId}.json`, updatedBank);
