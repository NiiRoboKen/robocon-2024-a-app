import { ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  onPress?: () => void;
  onRelease?: () => void;
};

export const Button = ({ children, onClick, onPress, onRelease }: Props) => {
  return (
   
      <button
        onClick={onClick}
        onTouchStart={onPress}
        onTouchEnd={onRelease}
        onMouseDown={onPress}
        onMouseUp={onRelease}
        className={classes.button}
      >
        {children}
      </button>
  
  );
};
