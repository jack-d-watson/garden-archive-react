import Button from "./Button";

export default function NumberInput(props: {
  value: number;
  max: number;
  min: number;
  id: string;
  onChange: (newValue: number) => void;
}) {
  const { min, max, onChange, value } = props;
  function setNewValue(newValue: number) {
    if(newValue > max || newValue < min) {
      return;
    }
    onChange(newValue)
  }

  return (
    <div className="join border w-fit">
      <Button
        buttonType={"ghost"}
        className="btn join-item"
        onClick={() => {
          console.log("minus")
          setNewValue(value - 1);
        }}
      >
        -
      </Button>
      <input
        type="text"
        name=""
        id=""
        className="input join-item"
        value={props.value}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          const input = e.currentTarget.value
          if(!input || Number.isNaN(input)) {
            return;
          }
          console.log("set to "+ input)
          setNewValue(parseInt(input));
        }}
        size={1}
        maxLength={2}
        minLength={1}
        pattern="/\d+/"
      />
      <Button
        buttonType={"ghost"}
        className="btn join-item"
        onClick={() => {
          console.log("plus")
          setNewValue(value + 1);
        }}
      >
        +
      </Button>
    </div>
  );
}
