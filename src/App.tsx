import { useContext, useEffect } from "react";
import { ControllerContext } from "./components/ControllerProvider";
import classes from "./App.module.css";

const App = () => {
  const context = useContext(ControllerContext);
  if (context === null) {
    throw "???";
  }
  const { setController } = context;

  useEffect(() => {
    const interval = setInterval(() => {
      setController((prev) => {
        console.log(prev);
        return prev.reset();
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={classes.left}>
        <div></div>
        <div></div>
      </div>
      <div className={classes.right}></div>
    </>
  );
};

export default App;
