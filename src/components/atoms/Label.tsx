export default function Label(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p>
      <span className={"font-bold" + (props.className ? props.className : "")}>
        {props.children}
      </span>
    </p>
  );
}
