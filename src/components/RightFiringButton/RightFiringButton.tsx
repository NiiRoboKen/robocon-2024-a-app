import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";
import classes from "../MotionButton.module.css";

export const RightFiringButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onClick={() => {
          setController(controller.push_right_firing());
        }}
      >
        <p className={classes.motion}>右発射</p>
      </Button>
    </div>
  );
};
