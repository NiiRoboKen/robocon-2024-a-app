import { Button } from "../Button";
import { useController } from "../ControllerProvider/ControllerProvider";
import style from "./CrossKey.module.css";
import { stopEvent } from "../../controller";
import { MAX_POWER, POWER_RATIO } from "../../App";

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
                value: { x: 0, y: POWER_RATIO * MAX_POWER },
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
        <Button>
          <p className={style["center-key"]}>●</p>
        </Button>
      </div>
      <div className={style["position-left"]}>
        <Button
          onPress={() => {
            setController(
              controller.update_event({
                type: "move",
                value: { x: -1 * POWER_RATIO * MAX_POWER, y: 0 },
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
                value: { x: POWER_RATIO * MAX_POWER, y: 0 },
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
                value: { x: 0, y: -1 * POWER_RATIO * MAX_POWER },
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
