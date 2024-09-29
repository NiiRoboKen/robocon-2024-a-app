import { ReactNode } from "react";
import classes from "./CrossKey.module.css";

type Color = "red" | "blue" | "green" | "yellow";

const colorStyles = {
  red: { backgroundColor: "#FF4015" },
  blue: { backgroundColor: "#3A87FE" },
  green: { backgroundColor: "#64C466" },
  yellow: { backgroundColor: "#F6CE46" },
};

type Props = {
  children?: ReactNode;
  onPress?: () => void;
  onRelease?: () => void;
  color: Color;
};

export const CrossKeyButton = ({
  children,
  onPress,
  onRelease,
  color,
}: Props) => {
  return (
    <button
      onTouchStart={onPress}
      onTouchEnd={onRelease}
      onMouseDown={onPress}
      onMouseUp={onRelease}
      className={classes.key}
      style={color ? colorStyles[color] : {}}
    >
      {children}
    </button>
  );
};
