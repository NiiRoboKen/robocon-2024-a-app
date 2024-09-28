import { Button } from "../Button";
import { useController } from "../../hooks/useController";

export const LeftFiringButton = () => {
  const { controller, setController } = useController();
  return (
    <div>
      <Button
        theme="pink-monster"
        onClick={() => {
          setController(controller.push_left_firing());
        }}
      >
        <p>左発射</p>
      </Button>
    </div>
  );
};
