import { Button } from "../Button";
import { useController } from "../ControllerProvider";
import { StopEvent, TurnEvent } from "../../controller";

export const LeftTurnButton = () => {
  const { controller, setController } = useController();

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
        <p>左回り</p>
      </Button>
    </div>
  );
};
