import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";

export const LeftWindingButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onPress={() => {
          setController(controller.update_left_winding(true));
        }}
        onRelease={() => {
          setController(controller.update_left_winding(false));
        }}
      >
        <p>左巻取り</p>
      </Button>
    </div>
  );
};
