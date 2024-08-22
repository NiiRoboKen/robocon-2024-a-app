type Props = {
    options: string[];
    selectedOption: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = (props: Props) => {
  const { options, selectedOption, onChange } = props;

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            name="select"
            checked={selectedOption === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};
