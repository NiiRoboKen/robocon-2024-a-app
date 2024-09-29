import { ReactNode } from "react";
import classes from "./Button.module.css";

type Theme =
  | "default"
  | "normal-monster"
  | "pink-monster"
  | "redbull"
  | "chillout"
  | "cola";
type ThemeStyle = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

type Props = {
  children?: ReactNode;
  onClick?: () => void;
  onPress?: () => void;
  onRelease?: () => void;
  disabled?: boolean;
  theme?: Theme;
};

const defaultStyle: ThemeStyle = {
  color: "#000000",
  backgroundColor: "#FFFFFF",
  borderColor: "#BFBFBF",
};

const normalMonster: ThemeStyle = {
  color: "#03CE00",
  backgroundColor: "#000000",
  borderColor: "#BFBFBF",
};

const pinkMonster: ThemeStyle = {
  color: "#FFFFFF",
  backgroundColor: "#FF6D7C",
  borderColor: "#000000",
};

const redBull: ThemeStyle = {
  color: "#EA4D3D",
  backgroundColor: "#000CEE",
  borderColor: "#F6CE46",
};

const chillOut: ThemeStyle = {
  color: "#00C8B2",
  backgroundColor: "#FFFFFF",
  borderColor: "#00C8B2",
};

const cola: ThemeStyle = {
  color: "#FFFFFF",
  backgroundColor: "#E10000",
  borderColor: "#BFBFBF",
};

const selectStyle = (theme?: Theme) => {
  if (theme === "normal-monster") {
    return normalMonster;
  } else if (theme === "pink-monster") {
    return pinkMonster;
  } else if (theme === "redbull") {
    return redBull;
  } else if (theme === "chillout") {
    return chillOut;
  } else if (theme === "cola") {
    return cola;
  } else {
    return defaultStyle;
  }
};

export const Button = ({
  children,
  onClick,
  onPress,
  onRelease,
  disabled,
  theme,
}: Props) => {
  return (
    <button
      onClick={onClick}
      onTouchStart={onPress}
      onTouchEnd={onRelease}
      onMouseDown={onPress}
      onMouseUp={onRelease}
      disabled={disabled}
      className={classes.button}
      style={selectStyle(theme)}
    >
      {children}
    </button>
  );
};
