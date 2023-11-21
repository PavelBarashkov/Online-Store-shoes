import React from "react";
import banner from "./assets/banner.jpg";
import classes from "./banner.module.css";

export const Banner = ({ title }) => {
  return (
    <div className={classes.banner}>
      <img src={banner} className="img-fluid" alt="К весне готовы!" />
      <h2 className={classes.banner_header}>{title}</h2>
    </div>
  );
};
