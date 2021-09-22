import React, { useState, useEffect, useContext } from "react";
import BanksContext from "../../store/banks-context";
import MainNavigation from "../MainNavigation";
import { getAllBanks } from "../../services/api-service";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const banksContext = useContext(BanksContext);

  useEffect(() => {
    setIsLoading(true);

    getAllBanks().then((data) => {
      const banks = [];

      for (const key in data) {
        const bank = {
          id: key,
          ...data[key],
        };

        banks.push(bank);
      }

      banksContext.banks = [...banks];
      setIsLoading(false);
    });
  }, [banksContext]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
