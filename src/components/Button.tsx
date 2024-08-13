type Props = {
  text: string;
  onClick: () => void;
};

export const Button = (props: Props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};
