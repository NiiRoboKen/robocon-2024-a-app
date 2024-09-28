import { Button } from "../Button";
import { useController } from "../ControllerProvider";
import styles from "../MotionButton.module.css";

export const LeftFiringButton = () => {
  const { controller, setController } = useController();
  return (
    <div>
      <Button
        onClick={() => {
          setController(controller.push_left_firing());
        }}
      >
        <p className={styles.motion}>左発射</p>
      </Button>
    </div>
  );
};
