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
          onPress={() => {
            setController(controller.update_move("front"));
          }}
          onRelease={() => {
            setController(controller.update_move("stop"));
          }}
        >
          <p className={style["front-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-center"]}>
        <Button onPress={() => {}} onRelease={() => {}}>
          <p className={style["center-key"]}>●</p>
        </Button>
      </div>
      <div className={style["position-left"]}>
        <Button
          onPress={() => {
            setController(controller.update_move("left"));
          }}
          onRelease={() => {
            setController(controller.update_move("stop"));
          }}
        >
          <p className={style["left-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-right"]}>
        <Button
          onPress={() => {
            setController(controller.update_move("right"));
          }}
          onRelease={() => {
            setController(controller.update_move("stop"));
          }}
        >
          <p className={style["right-key"]}>▲</p>
        </Button>
      </div>
      <div className={style["position-back"]}>
        <Button
          onPress={() => {
            setController(controller.update_move("back"));
          }}
          onRelease={() => {
            setController(controller.update_move("stop"));
          }}
        >
          <p className={style["back-key"]}>▼</p>
        </Button>
      </div>
    </div>
  );
};
