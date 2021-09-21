import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BM</div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Banks</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
