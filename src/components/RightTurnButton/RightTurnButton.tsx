import { Button } from "../Button";
import { useController } from "../../hooks/useController";
import { TurnEvent, stopEvent } from "../../controller";

export const RightTurnButton = () => {
  const { controller, setController } = useController();
  const turnEvent: TurnEvent = {
    type: "turn",
    value: "right",
  };
  return (
    <div>
      <Button
        theme="cola"
        onPress={() => {
          setController(controller.update_event(turnEvent));
        }}
        onRelease={() => {
          setController(controller.update_event(stopEvent));
        }}
      >
        <p>右回り</p>
      </Button>
    </div>
  );
};
