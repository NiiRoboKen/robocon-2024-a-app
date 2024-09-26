import { Button } from "../Button";
import { useController } from "../ControllerProvider";

export const LeftFiringButton = () => {
  const { controller, setController } = useController();
  return (
    <div>
      <Button
        onClick={() => {
          setController(controller.push_left_firing());
        }}
      >
        <p>左発射</p>
      </Button>
    </div>
  );
};
