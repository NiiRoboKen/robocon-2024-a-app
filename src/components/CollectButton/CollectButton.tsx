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
        onClick={() => {
          setController(controller.push_collect());
        }}
      >
        回収
      </Button>
    </div>
  );
};
