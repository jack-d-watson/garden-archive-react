export default function Range(props: {
  start: React.ReactNode;
  end: React.ReactNode;
}) {
  const { start, end } = props;
  return (
    <div>
      {start} - {end}
    </div>
  );
}
