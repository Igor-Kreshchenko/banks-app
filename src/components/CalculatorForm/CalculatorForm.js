import React, { useRef } from "react";
import classes from "./CalculatorForm.module.css";

const CalculatorForm = () => {
  const nameInputRef = useRef();
  const initialLoanInputRef = useRef();
  const downPaymentInputRef = useRef();

  const calculateHandler = (event) => {
    let enteredName = nameInputRef.current.value;
    const enteredInitialLoan = initialLoanInputRef.current.value;
    const enteredDownPayment = downPaymentInputRef.current.value;
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="bankName">Bank name</label>
        <input type="text" required id="bankName" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="initialLoan">Initial loan</label>
        <input
          type="text"
          required
          id="initialLoan"
          ref={initialLoanInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="downPayment">Down payment</label>
        <input
          type="text"
          required
          id="downPayment"
          ref={downPaymentInputRef}
        />
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={calculateHandler}>
          Calculate
        </button>
      </div>

      <p>Result:</p>
    </form>
  );
};

export default CalculatorForm;
