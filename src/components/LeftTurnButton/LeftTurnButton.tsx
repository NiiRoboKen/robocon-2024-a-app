import { Button } from "../Button";
import { useController } from "../ControllerProvider";
import { TurnEvent, stopEvent } from "../../controller";

export const LeftTurnButton = () => {
  const { controller, setController } = useController();
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
