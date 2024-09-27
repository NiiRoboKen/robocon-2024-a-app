import { useContext } from "react";
import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";
import { ControllerContext } from "../ControllerProvider";
import { stopEvent } from "../../controller";

export const MAX = 127;

export const JoyStick = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;

  const onMove = (event: IJoystickUpdateEvent) => {
    const x = event.x != null ? Math.floor(event.x * MAX) : 0;
    const y = event.y != null ? Math.floor(event.y * MAX) : 0;
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
