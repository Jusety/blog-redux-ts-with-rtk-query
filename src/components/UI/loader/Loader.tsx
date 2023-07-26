import React from "react";
import classes from "./Loader.module.css";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
    return <div className={classes.Loader}></div>;
};

export default Loader;
