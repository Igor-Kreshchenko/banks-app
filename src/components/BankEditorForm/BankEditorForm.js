import React, { useRef } from "react";
import classes from "./BankEditorForm.module.css";

const BankEditorForm = ({ btnText, onSubmit, onClose }) => {
  const nameInputRef = useRef();
  const interestRateInputRef = useRef();
  const maxLoanInputRef = useRef();
  const minDownPaymentInputRef = useRef();
  const loanTermInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredInterestRate = interestRateInputRef.current.value;
    const enteredMaxLoan = maxLoanInputRef.current.value;
    const enteredMinDownPayment = minDownPaymentInputRef.current.value;
    const enteredloanTerm = loanTermInputRef.current.value;

    const bankData = {
      name: enteredName,
      interestRate: enteredInterestRate,
      maxLoan: enteredMaxLoan,
      minDownPayment: enteredMinDownPayment,
      loanTerm: enteredloanTerm,
    };

    onSubmit(bankData);
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="interestRate">Interest rate</label>
        <input
          type="text"
          required
          id="interestRate"
          ref={interestRateInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="maxLoan">Maximum loan</label>
        <input type="text" required id="maxLoan" ref={maxLoanInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="minDownPayment">Minimum down payment</label>
        <input
          type="text"
          required
          id="minDownPayment"
          ref={minDownPaymentInputRef}
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="loanTerm">Loan term</label>
        <input
          type="text"
          required
          id="loanTerm"
          ref={loanTermInputRef}
        ></input>
      </div>

      <div className={classes.actions}>
        <button type="submit">{btnText}</button>
      </div>
    </form>
  );
};

export default BankEditorForm;
