import React, { useContext, useState } from "react";
import Card from "../../Card";
import Modal from "../../Modal";
import { deleteBank } from "../../../services/api-service";
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

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{name}</h3>

          <p>Interest rate: {interestRate} %</p>
          <p>Maximum loan: {maxLoan} $</p>
          <p>Minimum down payment: {minDownPayment} %</p>
          <p>Loan term: {loanTerm} months</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleUpdateModal}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>

      {isUpdateModalOpen && (
        <Modal
          bankData={bank}
          title="Update data"
          btnText="Update"
          onClose={toggleUpdateModal}
        />
      )}
    </li>
  );
};

export default BanksListItem;
