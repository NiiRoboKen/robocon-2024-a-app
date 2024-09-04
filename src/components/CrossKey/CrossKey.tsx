import { Button } from "../Button";
import { useContext } from "react";
import { ControllerContext } from "../ControllerProvider/ControllerProvider";
import classes from "./CrossKey.module.css";

export const CrossKey = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller, setController } = context;
  return (
    
    <div className={classes.crosslayout}>
      <div className={classes.front}>
        <Button
          children="前"
          onClick={() => {
            setController(controller.update_move("front"));
          }}
        />
      </div>
      <div className={classes.left}>
        <Button
          onClick={() => {
            setController(controller.update_move("left"));
          }}
        >
            <p>前</p>
        </Button>
        </div>
        <div className={classes.right}>
        <Button
          children="右"
          onClick={() => {
            setController(controller.update_move("right"));
          }}
        />
      </div>
      <div className={classes.back}>
        <Button
          children="後ろ"
          onClick={() => {
            setController(controller.update_move("back"));
          }}
        />
      </div>
    </div>
  );
};
