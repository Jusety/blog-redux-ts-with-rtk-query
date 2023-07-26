import React from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps {
    children: React.ReactNode;
    onClick?: (arg?: any) => void;
    className?: any;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    return (
        <button {...props} className={classes.MyBtn + " " + props.className}>
            {props.children}
        </button>
    );
};

export default MyButton;
