import { Button } from "../Button";
import { useController } from "../ControllerProvider";
import { TurnEvent, stopEvent } from "../../controller";
import styles from "../MotionButton.module.css";

export const RightTurnButton = () => {
  const { controller, setController } = useController();
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
        <p className={styles.motion}>右回り</p>
      </Button>
    </div>
  );
};
