import { Button } from "../Button";
import { useController } from "../../hooks/useController";
import styles from "../MotionButton.module.css";

export const RightFiringButton = () => {
  const { controller, setController } = useController();
  return (
    <div>
      <Button
        onClick={() => {
          setController(controller.push_right_firing());
        }}
      >
        <p className={styles.motion}>右発射</p>
      </Button>
    </div>
  );
};
