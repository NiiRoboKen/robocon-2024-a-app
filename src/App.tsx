import { useEffect } from "react";
import { CrossKey } from "./components/CrossKey";
import { JoyStick } from "./components/JoyStick";
import { CollectButton } from "./components/CollectButton";
import { LeftFiringButton } from "./components/LeftFiringButton";
import { RightFiringButton } from "./components/RightFiringButton";
import { LeftTurnButton } from "./components/LeftTurnButton";
import { RightTurnButton } from "./components/RightTurnButton";
import { useController } from "./hooks/useController";
import styles from "./App.module.css";
import { INTERVAL_TIME, URL } from "./env";
import { useWindowSize } from "./hooks/useWindowSize";

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

  const [, height] = useWindowSize();

  return (
    <>
      <div className={styles.app}>
        <div className={styles.top}>
          <div className={styles.top_center}>
            <LeftFiringButton />
            <CollectButton />
            <RightFiringButton />
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottoms}>
            <div className={styles.bottoms_top}>
              <LeftTurnButton />
            </div>
            <div className={styles.bottoms_bottom}>
              <JoyStick size={height / 3} />
            </div>
          </div>
          <div className={styles.bottoms}>
            <div className={styles.bottoms_top}>
              <RightTurnButton />
            </div>
            <div className={styles.bottoms_bottom}>
              <CrossKey />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
