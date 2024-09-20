import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";

export const RightWindingButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onPress={() => {
          setController(controller.update_right_winding(true));
        }}
        onRelease={() => {
          setController(controller.update_right_winding(false));
        }}
      >
        <p>右巻取り</p>
      </Button>
    </div>
  );
};
