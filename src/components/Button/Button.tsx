import { ReactNode } from "react";
import classes from "./Button.module.css";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  onPress?: () => void;
  onRelease?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  onPress,
  onRelease,
  disabled,
}: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        onTouchStart={onPress}
        onTouchEnd={onRelease}
        onMouseDown={onPress}
        onMouseUp={onRelease}
        className={classes.button}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
