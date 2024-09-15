import { Button } from "../Button";
import { useContext } from "react";
import { ControllerContext } from "../ControllerProvider/ControllerProvider";
import style from "./CrossKey.module.css";

export const CrossKey = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    <div className={style["cross-layout"]}>
      <div className={style["position-front"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("front"));
          }}
        >
          <p className={style["front-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-center"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("stop"));
          }}
        >
          <p className={style["center-key"]}>●</p>
        </Button>
      </div>
      <div className={style["position-left"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("left"));
          }}
        >
          <p className={style["left-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-right"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("right"));
          }}
        >
          <p className={style["right-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-back"]}>
        <Button
          onClick={() => {
            setController(controller.update_move("back"));
          }}
        >
          <p className={style["back-key"]}>▼</p>
        </Button>
      </div>
    </div>
  );
};
