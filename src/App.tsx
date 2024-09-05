import { useContext } from "react";
import { ControllerContext } from "./components/ControllerProvider/ControllerProvider";
import { CrossKey } from "./components/CrossKey/CrossKey";

const App = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  // const { controller, setController } = context;

  return (
    <>
      <CrossKey />
    </>
  );
};

export default App;
