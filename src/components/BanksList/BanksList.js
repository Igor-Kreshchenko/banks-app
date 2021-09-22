import React from "react";
import BanksListItem from "./BanksItem";
import classes from "./BanksList.module.css";

const BanksList = ({ banks }) => {
  return (
    <ul className={classes.list}>
      {banks.map((bank) => (
        <BanksListItem bank={bank} key={bank.id} />
      ))}
    </ul>
  );
};

export default BanksList;
