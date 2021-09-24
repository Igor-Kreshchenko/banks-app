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

    getAllBanks().then(({ result }) => {
      const banks = result;

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
    <div className={classes.layout}>
      <div className={classes.content}>
        <MainNavigation />
        <main className={classes.main}>{children}</main>
      </div>

      <footer className={classes.footer}>
        <p>
          Developed by{" "}
          <a href="https://github.com/Igor-Kreshchenko">Igor Kreshchenko</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
