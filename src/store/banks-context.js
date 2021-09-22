import { createContext, useState } from "react";

const BanksContext = createContext({
  banks: [],
  addNewBank: (bank) => {},
  deleteBank: (bankId) => {},
  updateBank: (bankId, updateData) => {},
});

export const BanksProvider = ({ children }) => {
  const [allBanks, setAllBanks] = useState([]);

  const addNewBankHandler = (newBank) => {
    setAllBanks((prevAllBanks) => {
      return prevAllBanks.concat(newBank);
    });
  };

  const deleteBankHandler = (bankId) => {
    setAllBanks((prevAllBanks) => {
      return prevAllBanks.filter((bank) => bank.id !== bankId);
    });
  };

  const updateBankHandler = (bankId, updateData) => {
    setAllBanks((prevAllBanks) => {
      const bankToUpdate = prevAllBanks.find((bank) => bank.id === bankId);
      const indexToUpdate = prevAllBanks.findIndex(
        (bank) => bank.id === bankId
      );
      const updatedBank = { ...bankToUpdate, ...updateData };

      return prevAllBanks.splice(indexToUpdate, 1, updatedBank);
    });
  };

  const context = {
    banks: allBanks,
    addNewBank: addNewBankHandler,
    deleteBank: deleteBankHandler,
    updateBank: updateBankHandler,
  };

  return (
    <BanksContext.Provider value={context}>{children}</BanksContext.Provider>
  );
};

export default BanksContext;
