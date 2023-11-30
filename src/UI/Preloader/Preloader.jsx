import React from "react";
import classes from "./preloader.module.css";

export const Preloader = () => {
  return (
    <div className={`${classes.preloader}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
