import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";

export const CollectButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onPress={() => {
          setController(controller.update_collect(true));
        }}
        onRelease={() => {
          setController(controller.update_collect(false));
        }}
      >
        <p>回収</p>
      </Button>
    </div>
  );
};
