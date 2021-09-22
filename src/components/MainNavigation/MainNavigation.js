import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Best logo</div>

      <nav>
        <ul>
          <li>
            <NavLink
              exact
              className={classes.link}
              activeClassName={classes.active}
              to="/"
            >
              Banks
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.link}
              activeClassName={classes.active}
              to="/calculator"
            >
              Calculator
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
