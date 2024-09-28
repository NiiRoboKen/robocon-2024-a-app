import { Button } from "../Button";
import { useController } from "../../hooks/useController";

export const RightFiringButton = () => {
  const { controller, setController } = useController();
  return (
    <div>
      <Button
        theme="normal-monster"
        onClick={() => {
          setController(controller.push_right_firing());
        }}
      >
        <p>右発射</p>
      </Button>
    </div>
  );
};
