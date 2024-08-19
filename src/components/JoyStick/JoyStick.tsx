import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

interface Props {
  disabled: boolean;
  deadZone: number;
  onNeutral: (event: IJoystickUpdateEvent) => void;
  onMove: (event: IJoystickUpdateEvent) => void;
}

export const JoyStick = ({ disabled, deadZone, onNeutral, onMove }: Props) => {
  return (
    <div>
      <Joystick
        disabled={disabled}
        minDistance={deadZone}
        move={onMove}
        stop={onNeutral}
        baseColor="#DDDDDD"
        stickColor="#AAAAAA"
      ></Joystick>
    </div>
  );
};
