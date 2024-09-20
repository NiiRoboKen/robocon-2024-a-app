import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";

export const RightFiringButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onPress={() => {
          setController(controller.update_right_firing(true));
        }}
        onRelease={() => {
          setController(controller.update_right_firing(false));
        }}
      >
        <p>右発射</p>
      </Button>
    </div>
  );
};
