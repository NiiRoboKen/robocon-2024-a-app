import { Button } from "../Button";
import { useController } from "../ControllerProvider/ControllerProvider";
import style from "./CrossKey.module.css";
import { MAX } from "../JoyStick/JoyStick";
import { stopEvent } from "../../controller";

const POWER = 0.5;

export const CrossKey = () => {
  const { controller, setController } = useController();
  return (
    <div className={style["cross-layout"]}>
      <div className={style["position-front"]}>
        <Button
          onPress={() => {
            setController(
              controller.update_event({
                type: "move",
                value: { x: 0, y: POWER * MAX },
              }),
            );
          }}
          onRelease={() => {
            setController(controller.update_event(stopEvent));
          }}
        >
          <p className={style["front-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-center"]}>
        <Button onPress={() => {}} onRelease={() => {}}>
          <p className={style["center-key"]}>●</p>
        </Button>
      </div>
      <div className={style["position-left"]}>
        <Button
          onPress={() => {
            setController(
              controller.update_event({
                type: "move",
                value: { x: -1 * POWER * MAX, y: 0 },
              }),
            );
          }}
          onRelease={() => {
            setController(controller.update_event(stopEvent));
          }}
        >
          <p className={style["left-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-right"]}>
        <Button
          onPress={() => {
            setController(
              controller.update_event({
                type: "move",
                value: { x: POWER * MAX, y: 0 },
              }),
            );
          }}
          onRelease={() => {
            setController(controller.update_event(stopEvent));
          }}
        >
          <p className={style["right-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-back"]}>
        <Button
          onPress={() => {
            setController(
              controller.update_event({
                type: "move",
                value: { x: 0, y: -1 * POWER * MAX },
              }),
            );
          }}
          onRelease={() => {
            setController(controller.update_event(stopEvent));
          }}
        >
          <p className={style["back-key"]}>▼</p>
        </Button>
      </div>
    </div>
  );
};
