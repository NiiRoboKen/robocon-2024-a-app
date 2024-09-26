import { useEffect } from "react";
import { CrossKey } from "./components/CrossKey";
import { JoyStick } from "./components/JoyStick";
import { CollectButton } from "./components/CollectButton";
import { LeftFiringButton } from "./components/LeftFiringButton";
import { RightFiringButton } from "./components/RightFiringButton";
import { LeftTurnButton } from "./components/LeftTurnButton";
import { RightTurnButton } from "./components/RightTurnButton";
import style from "./App.module.css";
import { useController } from "./components/ControllerProvider/ControllerProvider";

const URL = import.meta.env.VITE_URL;
const INTERVAL_TIME = import.meta.env.VITE_INTERVAL_TIME;
export const MAX_POWER = import.meta.env.VITE_MAX_POWER;
export const POWER_RATIO = import.meta.env.VITE_POWER_RATIO;

const postObject = (url: string, body: object): Promise<Response> => {
  const json = JSON.stringify(body);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  });
};

const App = () => {
  const { setController } = useController();

  useEffect(() => {
    const interval = setInterval(() => {
      setController((prev) => {
        console.debug(prev);

        postObject(URL, prev).then((res) => {
          console.debug(res.json());
        });

        return prev.reset_buttons();
      });
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={style.app}>
        <div className={style.left}>
          <div className={style.crosskey}>
            <CrossKey />
          </div>
          <div className={style.joystick}>
            <JoyStick />
          </div>
        </div>
        <div className={style.button}>
          <div className={style.collect}>
            <CollectButton />
          </div>
          <div className={style.firing}>
            <div className={style.leftfiring}>
              <LeftFiringButton />
            </div>
            <div className={style.rightfiring}>
              <RightFiringButton />
            </div>
          </div>
          <div className={style.turn}>
            <div className={style.leftturn}>
              <LeftTurnButton />
            </div>
            <div className={style.rightturn}>
              <RightTurnButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
