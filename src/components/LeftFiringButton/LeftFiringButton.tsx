import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";

export const LeftFiringButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onClick={() => {
          setController(controller.push_left_firing());
        }}
      >
        左発射
      </Button>
    </div>
  );
};
