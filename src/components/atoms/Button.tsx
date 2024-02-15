export type ButtonType =
  | "default"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link";

function getButtonTypeClass(buttonType: ButtonType): string {
  if (buttonType === "default") {
    return "";
  } else {
    return "btn-" + buttonType;
  }
}

export default function Button(props: {
  children: React.ReactNode;
  onClick: () => void;
  buttonType: ButtonType;
  className?: string;
}) {
  return (
    <button
      className={
        `btn ` +
        getButtonTypeClass(props.buttonType) +
        " " +
        (props.className && props.className)
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
