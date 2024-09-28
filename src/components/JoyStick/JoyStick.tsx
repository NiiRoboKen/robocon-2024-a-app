import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";
import { useController } from "../ControllerProvider";
import { stopEvent } from "../../controller";
import { MAX_POWER } from "../../App";

export const JoyStick = () => {
  const { controller, setController } = useController();

  const onMove = (event: IJoystickUpdateEvent) => {
    const x = event.x != null ? Math.floor(event.x * MAX_POWER) : 0;
    const y = event.y != null ? Math.floor(event.y * MAX_POWER) : 0;
    setController(controller.update_event({ type: "move", value: { x, y } }));
  };
  const onNeutral = () => {
    setController(controller.update_event(stopEvent));
  };
  return (
    <Joystick
      disabled={controller.event.type != "stop"}
      minDistance={20}
      move={onMove}
      stop={onNeutral}
      baseColor="#DDDDDD"
      stickColor="#AAAAAA"
    ></Joystick>
  );
};
