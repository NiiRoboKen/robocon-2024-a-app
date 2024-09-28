import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";
import { StopEvent, TurnEvent } from "../../controller";
import classes from "../MotionButton.module.css";

export const RightTurnButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;

  const stopEvent: StopEvent = {
    type: "stop",
    value: null,
  };
  const turnEvent: TurnEvent = {
    type: "turn",
    value: "right",
  };
  return (
    <div>
      <Button
        onPress={() => {
          setController(controller.update_event(turnEvent));
        }}
        onRelease={() => {
          setController(controller.update_event(stopEvent));
        }}
      >
        <p className={classes.motion}>右回り</p>
      </Button>
    </div>
  );
};
