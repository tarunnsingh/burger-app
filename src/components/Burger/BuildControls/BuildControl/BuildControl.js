import React from "react";
import classes from "./BuildControl.module.css";

const buidlControl = (props) => {
  <div className={classes.buidlControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>;
};

export default buidlControl;
