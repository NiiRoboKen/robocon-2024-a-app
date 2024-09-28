import { Button } from "../Button";
import { useController } from "../../hooks/useController";

export const CollectButton = () => {
  const { controller, setController } = useController();
  return (
      <Button
        theme="chillout"
        onClick={() => {
          setController(controller.push_collect());
        }}
      >
        <p>回収</p>
      </Button>
  );
};
