import {
  ReactNode,
  useState,
} from "react";
import { Controller } from "../../controller";
import { ControllerContext } from "../../hooks/useController";

export interface Props {
  children?: ReactNode;
}

export const ControllerProvider = ({ children }: Props) => {
  const [controller, setController] = useState(
    new Controller({ type: "stop", value: null }, false, false, false),
  );
  return (
    <ControllerContext.Provider value={{ controller, setController }}>
      {children}
    </ControllerContext.Provider>
  );
};
