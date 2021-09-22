import React, { useState, useContext } from "react";
import BanksContext from "../store/banks-context";
import IconButton from "../components/IconButton";
import BanksList from "../components/BanksList";
import Modal from "../components/Modal";
import { ReactComponent as AddIcon } from "../icons/add.svg";

const BanksManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const banksContext = useContext(BanksContext);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <section>
        <h1>All banks</h1>
        <IconButton onClick={toggleModal} aria-label="Add bank">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        <BanksList banks={banksContext.banks} />
      </section>

      {isModalOpen && (
        <Modal title="Add new bank" btnText="Add" onClose={toggleModal} />
      )}
    </div>
  );
};

export default BanksManagementPage;
