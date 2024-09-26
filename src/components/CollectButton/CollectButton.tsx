import { Button } from "../Button";
import { useController } from "../ControllerProvider";

export const CollectButton = () => {
  const { controller, setController } = useController();
  return (
    <div>
      <Button
        onClick={() => {
          setController(controller.push_collect());
        }}
      >
        <p>回収</p>
      </Button>
    </div>
  );
};
