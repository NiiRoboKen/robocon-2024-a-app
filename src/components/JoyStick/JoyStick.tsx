import { useContext } from "react";
import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";
import { ControllerContext } from "../ControllerProvider";

export const JoyStick = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;

  const onMove = (event: IJoystickUpdateEvent) => {
    const x = event.x != null ? Math.floor(event.x * 127) : 0;
    const y = event.y != null ? Math.floor(event.y * 127) : 0;
    setController(controller.update_joystick(x, y));
  };
  const onNeutral = (_event: IJoystickUpdateEvent) => {
    setController(controller.update_joystick(0, 0));
  };
  return (
    <div>
      <Joystick
        disabled={controller.move != "stop"}
        minDistance={20}
        move={onMove}
        stop={onNeutral}
        baseColor="#DDDDDD"
        stickColor="#AAAAAA"
      ></Joystick>
    </div>
  );
};
