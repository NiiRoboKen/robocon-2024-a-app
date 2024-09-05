import { Button } from "../Button";
import { useContext } from "react";
import { ControllerContext } from "../ControllerProvider/ControllerProvider";
import CrossKeyModule from "./CrossKey.module.css";

export const CrossKey = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div className={CrossKeyModule["cross-layout"]}>
      <div className={CrossKeyModule["position-front"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("front"));
          }}
        >
          <p className={CrossKeyModule["front-key"]}>▲</p>
        </Button>
      </div>
      <div className={CrossKeyModule["position-center"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("stop"));
          }}
        >
          <p className={CrossKeyModule["center-key"]}>●</p>
        </Button>
      </div>
      <div className={CrossKeyModule["position-left"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("left"));
          }}
        >
          <p className={CrossKeyModule["left-key"]}>▲</p>
        </Button>
      </div>
      <div className={CrossKeyModule["position-right"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("right"));
          }}
        >
          <p className={CrossKeyModule["right-key"]}>▲</p>
        </Button>
      </div>
      <div className={CrossKeyModule["position-back"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("back"));
          }}
        >
          <p className={CrossKeyModule["back-key"]}>▼</p>
        </Button>
      </div>
    </div>
  );
};
