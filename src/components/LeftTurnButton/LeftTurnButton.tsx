import { useContext } from "react";
import { Button } from "../Button";
import { ControllerContext } from "../ControllerProvider";

export const LeftTurnButton = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div>
      <Button
        onPress={() => {
          setController(controller.update_move("leftTurn"));
        }}
        onRelease={() => {
          setController(controller.update_move("stop"));
        }}
      >
        <p>左回り</p>
      </Button>
    </div>
  );
};
