import { useController } from "../../hooks/useController";
import style from "./CrossKey.module.css";
import { stopEvent } from "../../controller";
import { MAX_POWER, POWER_RATIO } from "../../env";
import { CrossKeyButton } from "./CrossKeyButton";

export const CrossKey = () => {
  const { controller, setController } = useController();
  return (
    <div className={style.cross_layout}>
      <div className={style.up}>
        <CrossKeyButton
          color="blue"
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
          <p>▲</p>
        </CrossKeyButton>
      </div>
      <div className={style.left}>
        <CrossKeyButton
          color="red"
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
          <p>◀</p>
        </CrossKeyButton>
      </div>
      <div className={style.right}>
        <CrossKeyButton
          color="green"
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
          <p>▶</p>
        </CrossKeyButton>
      </div>
      <div className={style.down}>
        <CrossKeyButton
          color="yellow"
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
          <p>▼</p>
        </CrossKeyButton>
      </div>
    </div>
  );
};
