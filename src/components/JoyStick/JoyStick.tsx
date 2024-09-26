import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";
import { useController } from "../ControllerProvider";
import { stopEvent } from "../../controller";

export const MAX = 127;

export const JoyStick = () => {
  const { controller, setController } = useController();

  const onMove = (event: IJoystickUpdateEvent) => {
    const x = event.x != null ? Math.floor(event.x * MAX) : 0;
    const y = event.y != null ? Math.floor(event.y * MAX) : 0;
    setController(controller.update_event({ type: "move", value: { x, y } }));
  };
  const onNeutral = () => {
    setController(controller.update_event(stopEvent));
  };
  return (
    <div>
      <Joystick
        disabled={controller.event.type != "stop"}
        minDistance={20}
        move={onMove}
        stop={onNeutral}
        baseColor="#DDDDDD"
        stickColor="#AAAAAA"
      ></Joystick>
    </div>
  );
};
