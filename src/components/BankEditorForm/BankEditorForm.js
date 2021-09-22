import React, { useState, useContext } from "react";
import BanksContext from "../../store/banks-context";
import { addNewBank, updateBank } from "../../services/api-service";
import classes from "./BankEditorForm.module.css";

const BankEditorForm = ({ bankData, btnText, onClose }) => {
  const banksContext = useContext(BanksContext);
  const [nameValue, setNameValue] = useState(bankData ? bankData.name : "");
  const [interestRateValue, setInterestRateValue] = useState(
    bankData ? bankData.interestRate : ""
  );
  const [maxLoanValue, setMaxLoanValue] = useState(
    bankData ? bankData.maxLoan : ""
  );
  const [minDownPaymentValue, setMinDownPaymentValue] = useState(
    bankData ? bankData.minDownPayment : ""
  );
  const [loanTermValue, setLoanTermValue] = useState(
    bankData ? bankData.loanTerm : ""
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setNameValue(value);
        break;

      case "interestRate":
        setInterestRateValue(value);
        break;

      case "maxLoan":
        setMaxLoanValue(value);
        break;

      case "minDownPayment":
        setMinDownPaymentValue(value);
        break;

      case "loanTerm":
        setLoanTermValue(value);
        break;

      default:
        console.warn(`Invalid field ${name} type`);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const bank = {
      name: nameValue,
      interestRate: interestRateValue,
      maxLoan: maxLoanValue,
      minDownPayment: minDownPaymentValue,
      loanTerm: loanTermValue,
    };

    if (bankData) {
      updateBank(bankData.id, bank).then(() =>
        banksContext.updateBank(bankData.id, bank)
      );
    } else {
      addNewBank(bank)
        .then(() => banksContext.addNewBank(bank))
        .catch((error) => error.message);
    }

    onClose();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          value={nameValue}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="interestRate">Interest rate %</label>
        <input
          type="text"
          required
          id="interestRate"
          name="interestRate"
          value={interestRateValue}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="maxLoan">Maximum loan $</label>
        <input
          type="text"
          required
          id="maxLoan"
          name="maxLoan"
          value={maxLoanValue}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="minDownPayment">Minimum down payment %</label>
        <input
          type="text"
          required
          id="minDownPayment"
          name="minDownPayment"
          value={minDownPaymentValue}
          onChange={handleChange}
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="loanTerm">Loan term (months)</label>
        <input
          type="text"
          required
          id="loanTerm"
          name="loanTerm"
          value={loanTermValue}
          onChange={handleChange}
        ></input>
      </div>

      <div className={classes.actions}>
        <button type="submit">{btnText}</button>
      </div>
    </form>
  );
};

export default BankEditorForm;
