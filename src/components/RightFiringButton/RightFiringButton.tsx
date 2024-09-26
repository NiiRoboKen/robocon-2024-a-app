import { Button } from "../Button";
import { useController } from "../ControllerProvider";

export const RightFiringButton = () => {
  const { controller, setController } = useController();
  return (
    <div>
      <Button
        onClick={() => {
          setController(controller.push_right_firing());
        }}
      >
        <p>右発射</p>
      </Button>
    </div>
  );
};
