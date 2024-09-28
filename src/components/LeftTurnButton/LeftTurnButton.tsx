import { Button } from "../Button";
import { useController } from "../ControllerProvider";
import { TurnEvent, stopEvent } from "../../controller";
import styles from "../MotionButton.module.css";

export const LeftTurnButton = () => {
  const { controller, setController } = useController();
  const turnEvent: TurnEvent = {
    type: "turn",
    value: "left",
  };
  return (
    <Button
      onPress={() => {
        setController(controller.update_event(turnEvent));
      }}
      onRelease={() => {
        setController(controller.update_event(stopEvent));
      }}
    >
      <p className={styles.motion}>左回り</p>
    </Button>
  );
};
