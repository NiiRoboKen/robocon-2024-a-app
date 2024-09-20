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
        onPress={() => {
          setController(controller.update_left_firing(true));
        }}
        onRelease={() => {
          setController(controller.update_left_firing(false));
        }}
      >
        <p>左発射</p>
      </Button>
    </div>
  );
};
