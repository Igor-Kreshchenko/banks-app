import React from "react";
import BankEditorForm from "../BankEditorForm";
import Card from "../Card";
import classes from "./Modal.module.css";

const Modal = ({ bankData, title, btnText, onClose }) => {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Card>
      <div className={classes.backdrop} onClick={handleBackdropClick}>
        <div className={classes.content}>
          <h2>{title}</h2>
          <BankEditorForm
            bankData={bankData}
            btnText={btnText}
            onClose={onClose}
          />
        </div>
      </div>
    </Card>
  );
};

export default Modal;
