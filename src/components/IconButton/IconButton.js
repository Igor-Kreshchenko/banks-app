import React from "react";
import classes from "./IconButton.module.css";

const IconButton = ({ children, onClick }) => (
  <button type="button" className={classes.iconButton} onClick={onClick}>
    {children}
  </button>
);

export default IconButton;
