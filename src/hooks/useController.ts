import { SetStateAction, createContext, useContext } from "react";
import { Controller } from "../controller";

export interface ContextType {
  controller: Controller;
  setController: React.Dispatch<SetStateAction<Controller>>;
}

export const ControllerContext = createContext<ContextType | null>(null);

export const useController = () => {
  const context = useContext(ControllerContext);

  if (context == null) {
    throw new Error(
      "ControllerContext must be used within a ControllerProvider.",
    );
  }

  return context;
};
