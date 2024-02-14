import { FieldValue } from "@/types/FieldValue";
import Badge from "../atoms/Badge";
import Range from "../atoms/Range";
import Field from "./Field";

export default function RangeField(props: {
  start: FieldValue;
  end: FieldValue;
  className?: string;
}) {
  const { start, end, className } = props;
  const startBadge = <Badge type={start.badge.type} outline={start.badge.outline} label={start.value} icon={start.icon}/>;
  const endBadge = <Badge type={end.badge.type} outline={end.badge.outline} label={end.value} icon={end.icon}/>;
  return (
    <Field className={className ? className : ""}>
      <Range start={startBadge} end={endBadge} />
    </Field>
  );
}
