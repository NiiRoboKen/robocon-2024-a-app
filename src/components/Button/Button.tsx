import { ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick} className={classes.button}>
        {children}
      </button>
    </div>
  );
};
