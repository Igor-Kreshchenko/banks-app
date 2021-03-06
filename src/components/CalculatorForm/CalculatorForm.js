import React, { useState, useContext } from "react";
import BanksContext from "../../store/banks-context";
import classes from "./CalculatorForm.module.css";

const CalculatorForm = () => {
  const banksContext = useContext(BanksContext);
  const [nameValue, setNameValue] = useState("");
  const [initialLoanValue, setInitialLoanValue] = useState("");
  const [downPaymentValue, setDownPaymentValue] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [isPaymentAvailable, setIsPaymentAvailable] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const banks = banksContext.banks;

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setNameValue(value);
        break;

      case "initialLoan":
        setInitialLoanValue(value);
        break;

      case "downPayment":
        setDownPaymentValue(value);
        break;

      default:
        console.warn(`Invalid field ${name} type`);
    }

    setIsResult(false);
  };

  const calculateHandler = () => {
    const selectedBank = banks.find(
      (bank) => bank.name.toLowerCase() === nameValue.toLowerCase()
    );

    if (selectedBank) {
      const { interestRate, loanTerm, minDownPayment, maxLoan } = selectedBank;
      const downPaymentPercentage = (downPaymentValue / initialLoanValue) * 100;

      if (
        downPaymentPercentage >= minDownPayment &&
        initialLoanValue <= maxLoan
      ) {
        const monthlyPayment =
          (initialLoanValue *
            (interestRate / 100 / 12) *
            (1 + interestRate / 100 / 12) ** loanTerm) /
          ((1 + interestRate / 100 / 12) ** loanTerm - 1);

        setMonthlyPayment(Math.round(monthlyPayment));
        setIsResult(true);
        setIsPaymentAvailable(true);
        return;
      }

      setIsResult(true);
      setIsPaymentAvailable(false);
    }
  };

  return (
    <>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="bankName">Bank name</label>
          <select
            name="name"
            id="bankName"
            value={nameValue}
            onChange={handleChange}
            required
          >
            <option value="" disabled></option>
            {banks.map(({ name }) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="initialLoan">Initial loan $</label>
          <input
            type="text"
            required
            id="initialLoan"
            name="initialLoan"
            value={initialLoanValue}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="downPayment">Down payment $</label>
          <input
            type="text"
            required
            id="downPayment"
            name="downPayment"
            value={downPaymentValue}
            onChange={handleChange}
          />
        </div>

        <div className={classes.actions}>
          <button type="button" onClick={calculateHandler}>
            Calculate
          </button>
        </div>
      </form>

      {isResult && (
        <div className={classes.resultBox}>
          {isPaymentAvailable ? (
            <p className={classes.resultSuccess}>
              Monthly Payment: {monthlyPayment} $
            </p>
          ) : (
            <p className={classes.resultError}>Unsuitable credit conditions</p>
          )}
        </div>
      )}
    </>
  );
};

export default CalculatorForm;
