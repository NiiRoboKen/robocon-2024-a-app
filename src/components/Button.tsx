import classes from "./Button.module.scss";

type Props = {
  text: string;
  onClick: () => void;
};

export const Button = (props: Props) => {
  return (
    <div>
      <button onClick={props.onClick} className={classes.button}>
        {props.text}
      </button>
    </div>
  );
};
