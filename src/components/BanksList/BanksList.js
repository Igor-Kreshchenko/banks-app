import React, { useContext } from "react";
import BanksContext from "../../store/banks-context";
import BanksListItem from "./BanksItem";
import classes from "./BanksList.module.css";

const BanksList = () => {
  const banksContext = useContext(BanksContext);
  const banks = banksContext.banks;

  return (
    <ul className={classes.list}>
      {banks.map(
        (bank) => bank.id && <BanksListItem bank={bank} key={bank.id} />
      )}
    </ul>
  );
};

export default BanksList;
