import { useContext } from "react";
import { ControllerContext } from "./components/ControllerProvider";

const App = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  // const { controller, setController } = context;

  return <></>;
};

export default App;
