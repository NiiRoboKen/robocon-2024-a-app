import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Controller } from "../../controller";

export interface Props {
  children?: ReactNode;
}

export interface ContextType {
  controller: Controller;
  setController: React.Dispatch<SetStateAction<Controller>>;
}

const ControllerContext = createContext<ContextType | null>(null);

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

export const useController = () => {
  const context = useContext(ControllerContext);

  if (context == null) {
    throw new Error(
      "ControllerContext must be used within a ControllerProvider.",
    );
  }

  return context;
};
