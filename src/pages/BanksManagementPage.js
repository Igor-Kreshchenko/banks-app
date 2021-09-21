import React, { useState, useEffect, useContext } from "react";
import BanksContext from "../store/banks-context";
import IconButton from "../components/IconButton";
import BanksList from "../components/BanksList";
import Modal from "../components/Modal";
import { addNewBank, getAllBanks } from "../services/api-service";
import { ReactComponent as AddIcon } from "../icons/add.svg";

const BanksManagementPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedBanks, setLoadedBanks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const banksContext = useContext(BanksContext);

  useEffect(() => {
    setIsLoading(true);

    getAllBanks().then((data) => {
      const banks = [];

      for (const key in data) {
        const bank = {
          id: key,
          ...data[key],
        };

        banks.push(bank);
      }

      setLoadedBanks(banks);
      banksContext.banks = banks;
      setIsLoading(false);
    });
  }, [banksContext]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const createNewBank = (bankData) => {
    addNewBank(bankData).then(() => banksContext.addNewBank(bankData));
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <section>
        <h1>All banks</h1>
        <IconButton onClick={toggleModal} aria-label="Add bank">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        <BanksList banks={loadedBanks} />
      </section>

      {isModalOpen && (
        <Modal
          onSubmit={createNewBank}
          title="Add new bank"
          onClose={toggleModal}
        />
      )}
    </div>
  );
};

export default BanksManagementPage;
