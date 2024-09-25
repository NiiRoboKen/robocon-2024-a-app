import { useContext, useEffect } from "react";
import { ControllerContext } from "./components/ControllerProvider";
import { CrossKey } from "./components/CrossKey";
import { JoyStick } from "./components/JoyStick";
import { CollectButton } from "./components/CollectButton";
import { LeftFiringButton } from "./components/LeftFiringButton";
import { RightFiringButton } from "./components/RightFiringButton";
import { LeftTurnButton } from "./components/LeftTurnButton";
import { RightTurnButton } from "./components/RightTurnButton";
import classes from "./App.module.css";

const App = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { setController } = context;

  const URL = "http://127.0.0.1:3000";

  useEffect(() => {
    const interval = setInterval(() => {
      setController((prev) => {
        const body = JSON.stringify(prev);
        console.log(body);
        const res = fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        });

        res
          .then((res) => {
            console.debug(res.json());
          })
          .catch((err) => {
            console.error(err);
          });

        return prev.reset_buttons();
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
