import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";
import classes from "../MotionButton.module.css";

export const CollectButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <Button
      onClick={() => {
        setController(controller.push_collect());
      }}
    >
      <p className={classes.motion}>回収</p>
    </Button>
  );
};
