import React, { useContext, useState } from "react";
import Card from "../../Card";
import Modal from "../../Modal";
import { deleteBank, updateBank } from "../../../services/api-service";
import BanksContext from "../../../store/banks-context";
import classes from "./BanksListItem.module.css";

const BanksListItem = ({ bank }) => {
  const { id, name, interestRate, maxLoan, minDownPayment, loanTerm } = bank;
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const banksContext = useContext(BanksContext);

  const toggleUpdateModal = () => {
    setIsUpdateModalOpen(!isUpdateModalOpen);
  };

  const deleteHandler = () => {
    deleteBank(id).then(() => banksContext.deleteBank(id));
  };

  const updateHandler = (bankId, updateData) => {
    updateBank(bankId, updateData).then(() =>
      banksContext.updateBank(bankId, updateData)
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{name}</h3>

          <p>Interest rate: {interestRate}</p>
          <p>Maximum loan: {maxLoan}</p>
          <p>Minimum down payment: {minDownPayment}</p>
          <p>Loan term: {loanTerm}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleUpdateModal}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>

      {isUpdateModalOpen && (
        <Modal
          onSubmit={updateHandler}
          title="Update data"
          btnText="Update"
          onClose={toggleUpdateModal}
        />
      )}
    </li>
  );
};

export default BanksListItem;
