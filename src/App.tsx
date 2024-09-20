import { useContext, useEffect } from "react";
import { ControllerContext } from "./components/ControllerProvider";
import { CrossKey } from "./components/CrossKey";
import { JoyStick } from "./components/JoyStick";
import { CollectButton } from "./components/CollectButton";
import { LeftFiringButton } from "./components/LeftFiringButton";
import { RightFiringButton } from "./components/RightFiringButton";
import { LeftWindingButton } from "./components/LeftWindingButton";
import { RightWindingButton } from "./components/RightWindingButton";
import { LeftTurnButton } from "./components/LeftTurnButton";
import { RightTurnButton } from "./components/RightTurnButton";
import classes from "./App.module.css";

const App = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { controller } = context;

  useEffect(() => {
    console.log(controller);
  }, [controller]);

  return (
    <>
      <div className={classes.app}>
        <div className={classes.left}>
          <div className={classes.crosskey}>
            <CrossKey />
          </div>
          <div className={classes.joystick}>
            <JoyStick />
          </div>
        </div>
        <div className={classes.button}>
          <div className={classes.collect}>
            <CollectButton />
          </div>
          <div className={classes.firing}>
            <div className={classes.leftfiring}>
              <LeftFiringButton />
            </div>
            <div className={classes.rightfiring}>
              <RightFiringButton />
            </div>
          </div>
          <div className={classes.winding}>
            <div className={classes.leftwinding}>
              <LeftWindingButton />
            </div>
            <div className={classes.rightwinding}>
              <RightWindingButton />
            </div>
          </div>
          <div className={classes.turn}>
            <div className={classes.leftturn}>
              <LeftTurnButton />
            </div>
            <div className={classes.rightturn}>
              <RightTurnButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
