import { useController } from "../../hooks/useController";
import style from "./CrossKey.module.css";
import { stopEvent } from "../../controller";
import { MAX_POWER, POWER_RATIO } from "../../env";
import { CrossKeyButton } from "./CrossKeyButton";

export const CrossKey = () => {
  const { controller, setController } = useController();
  return (
    <div className={style["cross-layout"]}>
      <div className={style["position-front"]}>
        <CrossKeyButton
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
          <p>上</p>
        </CrossKeyButton>
      </div>
      <div className={style["position-left"]}>
        <CrossKeyButton
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
          <p>左</p>
        </CrossKeyButton>
      </div>
      <div className={style["position-right"]}>
        <CrossKeyButton
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
          <p>右</p>
        </CrossKeyButton>
      </div>
      <div className={style["position-back"]}>
        <CrossKeyButton
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
          <p>下</p>
        </CrossKeyButton>
      </div>
    </div>
  );
};
