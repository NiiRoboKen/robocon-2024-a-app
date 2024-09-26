import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";
import { StopEvent, TurnEvent } from "../../controller";

export const LeftTurnButton = () => {
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
    value: "left",
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
       左回り
      </Button>
    </div>
  );
};
