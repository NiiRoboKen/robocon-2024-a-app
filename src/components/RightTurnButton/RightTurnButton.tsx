import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";

export const RightTurnButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onPress={() => {
          setController(controller.update_move("rightTurn"));
        }}
        onRelease={() => {
          setController(controller.update_move("stop"));
        }}
      >
        <p>右回り</p>
      </Button>
    </div>
  );
};
