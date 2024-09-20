import { ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  children?: ReactNode;
  onPress?: () => void;
  onRelease?: () => void;
};

export const Button = ({ children, onPress, onRelease }: Props) => {
  return (
    <div>
      <button
        onTouchStart={onPress}
        onTouchEnd={onRelease}
        onMouseDown={onPress}
        onMouseUp={onRelease}
        className={classes.button}
      >
        {children}
      </button>
    </div>
  );
};
